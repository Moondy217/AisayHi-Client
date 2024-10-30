import { useEffect, useState } from 'react';
import axios from 'axios'; // axios 가져오기
import api from '../commons/api/axiosInstance'; // 커스텀 axios 인스턴스 사용

function useRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source(); // axios에서 취소 토큰 생성

    async function fetchRecommendations() {
      try {
        const response = await api.get('/pm/recommend/', {
          cancelToken: source.token, // 취소 토큰 전달
        });

        // 데이터 구조 평탄화
        const flattenedRecommendations = [
          ...response.data.situation_recommendations,
          ...response.data.pantry_recommendations,
        ];

        setRecommendations(flattenedRecommendations);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message); // 요청이 취소된 경우 처리
        } else {
          console.error('Error fetching recommendations:', err);
          setError('Failed to load recommendations.');
        }
      }
    }

    fetchRecommendations();

    // 컴포넌트가 언마운트될 때 요청 취소
    return () => {
      source.cancel('Component unmounted, request canceled.');
    };
  }, []);

  return { recommendations, error };
}

export default useRecommendations;
