import React from 'react';

const ChallengeDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">건강카드</h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-600">내가 만든 챌린지</span>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">챌린지 만들기</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-600">참여중인 챌린지</span>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">진행중인</button>
          <button type="button" className="bg-gray-300 text-gray-800 px-4 py-2 rounded">종료된</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;