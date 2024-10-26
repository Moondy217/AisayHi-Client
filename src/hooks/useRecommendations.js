import { useEffect, useState } from 'react';
import api from '../commons/api/axiosInstance';

function useRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await api.get('/pm/recommend/');
        if (response.data.recommendations) {
          setRecommendations(response.data.recommendations);
        } else {
          console.error('잘못된 데이터 구조:', response.data);
          setError('데이터 구조가 잘못되었습니다.');
        }
      } catch (err) {
        console.error('추천 데이터를 가져오는 중 오류 발생:', err);
        setError('추천 데이터를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchRecommendations();
  }, []);

  return { recommendations, error };
}

export default useRecommendations;