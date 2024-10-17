const userMockData = {
  teamId: 1,
  image:
    'data:image/jpeg;base64,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',
  nickname: '장용한',
  updatedAt: '2024-10-12T03:49:32.544Z',
  createdAt: '2024-10-12T03:49:33.544Z',
  email: 'wkddydgks1@naver.com',
  id: 1,
};

export default userMockData;
