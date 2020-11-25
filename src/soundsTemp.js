const soundsTemp = [
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fburpscream.mp3?alt=media&token=05d25241-d32f-4de8-b050-5e48193675de',
    prankCount: 0,
    title: 'Burp Scream',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh01.mp3?alt=media&token=bc30a502-46ef-404c-9a3f-41555477c5f2',
    prankCount: 0,
    title: 'Laugh 01',
  },
  {
    prankCount: 0,
    title: 'Laugh 02',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh02.mp3?alt=media&token=36b5787e-a8f3-40cb-ba6f-99b0aa12e285',
  },
  {
    title: 'Laugh 03',
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh03.mp3?alt=media&token=6d0492f7-20b7-432f-99d8-4018472f33b0',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh04.mp3?alt=media&token=f61316b3-4ce4-4229-a444-274138b3c822',
    prankCount: 0,
    title: 'Laugh 04',
  },
  {
    title: 'Laugh 05',
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh05.mp3?alt=media&token=99130f36-7f9c-44b6-a6c2-4be7d0dd3d96',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Flaugh06.mp3?alt=media&token=93944e64-b7b9-4d9a-9a21-0dca6f0a18fa',
    prankCount: 0,
    title: 'Laugh 06',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream01.mp3?alt=media&token=e518b3e8-661b-45d5-bb5b-87670f066587',
    title: 'Scream 01',
    prankCount: 0,
  },
  {
    title: 'Scream 02',
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream02.mp3?alt=media&token=be06f620-b227-42bc-a3dd-20de3008a8b2',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream03.mp3?alt=media&token=5c1f9bc1-815d-4a21-8057-0cff2d4c39ea',
    prankCount: 0,
    title: 'Scream 03',
  },
  {
    title: 'Scream 04',
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream04.mp3?alt=media&token=2728269d-70f6-47f2-8434-c75a92570b8d',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream05.mp3?alt=media&token=035808d4-b5a3-4b84-b211-dbae015e93a0',
    title: 'Scream 05',
    prankCount: 0,
  },
  {
    title: 'Scream 06',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream06.mp3?alt=media&token=082b4a8a-4c65-442f-91e1-6ab522928134',
    prankCount: 0,
  },
  {
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream07.mp3?alt=media&token=a6899107-03aa-4942-bc06-bf5d9bc83cb6',
    title: 'Scream 07',
  },
  {
    prankCount: 0,
    title: 'Scream 08',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream08.mp3?alt=media&token=c3740614-dd6a-46fd-9ed5-ec858583b999',
  },
  {
    title: 'Scream 09',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream09.mp3?alt=media&token=fbf70471-0de3-4d11-b40c-4b27f356b36b',
    prankCount: 0,
  },
  {
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream10.mp3?alt=media&token=7dc7fdb8-a854-4ced-879d-6ef9252605dd',
    title: 'Scream 10',
  },
  {
    prankCount: 0,
    title: 'Scream 11',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream11.mp3?alt=media&token=17524daf-6ad5-471f-b698-661da59987dd',
  },
  {
    title: 'Scream 12',
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream12.mp3?alt=media&token=08a96098-4172-43e7-8802-406cb7230364',
    prankCount: 0,
  },
  {
    title: 'Scream 13',
    prankCount: 0,
    url:
      'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream13.mp3?alt=media&token=a628d56c-891a-4c6a-be6b-442338b50bb0',
  },
];
export default soundsTemp;
