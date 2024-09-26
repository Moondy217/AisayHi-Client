// subMeunItem JSON 데이터 불러오기
import items from '../../../data/subMeunItem.json';

export default function SubGreyMenu() {
  return (
    <div className="h-[230px] w-full bg-gray-300 bg-opacity-50 mt-0">
      <div className="h-[230px] flex justify-center">
        <div className="flex flex-nowrap overflow-x-auto space-x-[135px] px-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-5 }`}>
                <div className="cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cursor-pointer border border-[#3B6EF1] bg-white rounded-[13px] w-[100px] h-[100px] mt-[20px]" />
                  <p className="mt-[15px] text-[18px]">{item.name}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}