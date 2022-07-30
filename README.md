github pages에 프로젝트 배포 하였습니다.  
pages 주소: https://treetea-bro.github.io/web3.0/  

-- Faucet  
Goerli 테스트넷에 배포하여서 프로젝트 이용 시 Goerli ETH가 필요합니다.  
https://goerlifaucet.com/ 에 접속하여서 Alchemy 회원 가입 후 로그인하여서 Goerli ETH를 지급 받아서 사용하시거나 인터넷에서 Goerli faucet을 검색하셔서 Goerli ETH를 지급 받아주세요.  
  
-- 설명  
사이트에 접속하시면 이더리움 카드 밑 부분에 정보를 입력하는 부분이 있습니다.  
  
Address To 부분에는 ETH를 전송 받을 사람의 지갑 주소를 입력하여 주시고, (현재 로그인 되어있는 계정을 입력하면 동작하지 않습니다.)  
Amount (ETH) 부분에는 송금할 ETH 금액을 입력,  
keyword (Gif) 부분에는 Gif 이미지에 관한 키워드를 적어주시면 해당 키워드에 해당하는 Gif 이미지가 거래내역과 함께 홈페이지에 생성됩니다.  
Enter Message 부분에는 원하시는 메시지를 입력하시면 해당 메시지를 홈페이지에서 보실 수 있습니다.  
  
내용을 전부 작성하시고 Send Now 버튼을 클릭하시면 팝업 창이 2번 뜨는데 첫번째 팝업은 송금에 대한 confirm이고,   
두번째 팝업은 스마트 컨트렉트에 입력하신 정보를 저장하는 함수를 호출하는 것에 대한 confirm 입니다.  
두번째 팝업을 confirm 하시면 블록체인에 해당 정보가 기록되고, 그 정보를 바탕으로 홈페이지에 거래내역과 gif 이미지등을 표시하게끔 되어있습니다.  
  
* 홈페이지에 보시면 removeAllTransactions 버튼이 있는데 해당 버튼을 클릭하고 confirm하시면 모든 거래내역이 삭제됩니다. (거래 내역이 너무 많이 쌓이는 걸 방지하기위해 작성하였습니다.)
