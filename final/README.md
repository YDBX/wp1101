# wp1101-final

## Contributer: 陳信宇、楊登堡、鄧旭辰

## 環境設置與套件安裝
1. 在clone/pull下來的wp1101/final資料夾輸入以下指令以完成環境設置

cd frontend

yarn install

cd ../backend

yarn install

2. 在./backend資料夾中根據.env.defaults的格式加入.env檔，並輸入可使用之MONGO_URL

3. 開啟：
在./final資料夾用兩個terminals分別輸入以下指令

yarn start

yarn server

## 功能
1. 開啟頁面後，會有一個input box，用來輸入需縮短的網址，輸入後按下Shorten URL會出現簡短隨機的亂碼，按下Copy URL即可複製縮短的URL
2. Sign Up可進行註冊
3. Sign In可進行登入
4. 登入後的使用者，可在原本輸入URL的input box上方輸入想要縮短的名稱，自訂縮短網址的名稱，也可以不輸入縮短的名稱，讓後端隨機跑簡短的亂碼作為縮短的URL
5. 登入後的使用者，可以點擊右上方的Link History按鍵，觀看先前縮短的URL，並且可以在下方顯示link history的表格對過往縮短過的URL進行刪除。
