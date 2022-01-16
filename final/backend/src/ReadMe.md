1. ./src/resolvers/gqlSchema.js

這個部分在express-graphql中等效於在graphql-yoga中的schema.graphql，裡面只是把schema包起來而已

2. ./src/resolvers/resolver.js

這個部分等效於resolver/Query Mutation User Link .etc，做的事情完全一樣，只是換一個寫法，相較於
graphql-yoga把Query/Mutation.Subscription拆開，這裡面一次包含了所有resolver

Query:
    userHistory: 給username，回傳一個Link array，包含所有歷史轉換記錄
    logIn: 給username跟password，會檢查是否有此user，密碼是否正確，最後回傳User。

Mutation:
    createUser: 給username跟password，會檢查名字是否被佔用，如果沒有則回傳一個new User
    createLink: 給原網址，和username( optional)，然後會先檢查是否已有這個網址的short url，
    如果有則回傳已有的short url，否則random創造六碼縮網址（不包含localhost:5000)，會檢查
    是否有重複，若重複會跑回圈重新生成直到沒有重複，回傳Link。
    selfDefLink: 類似createLink，只是一定要給username，因為這是有註冊帳號方能使用的功能。
    deleteLink: 刪除自己的Link，也是一定要給username，只能刪自己的網址（廢話），無論是否有自定義字符，
    而且沒帳戶的人不能刪掉global共用的網址。
    
3. ./src/router/shortUrl.js
這個是鄧旭辰寫的部分，寫的hen棒

4. ./src/mongo.js  ./src/index.js
   定義mongo連線  跟 主程式

5. ./src/db.js

定義Mongo Schema
    Link Model: owner是為了查詢歷史紀錄，num_of_view是為了資料分析點擊次數
    User Model: encrypted_password是先把password經過bcrypt轉換後再儲存起來，這樣db裡面存的
    就不是明碼，所以資訊上也比較安全，之後登入會用compare來比較，不會有問題。