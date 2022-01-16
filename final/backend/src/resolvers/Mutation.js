const Mutation = {
  
    async createLink(parent, { origin }, { db, pubsub }, info) {
        const generateUrl = () => {
            
            let str = '';
            const arr = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            ];
            for (let i = 0; i < 6; i++) {
            const pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
            }
            return str;
        }  

        let short = generateUrl();
        return  new db.LinkModel({      
          origin : origin , short : short   
        }).save();
      
    },//createLink
    
    async deleteLink(parent, {url}, {db}, info){
        const task = await db.LinkModel.findOneAndDelete(
            {short:url}
          )
        if(!task){
            throw new Error("No such short url exists! " + url)
        }
        return task;
    }
};// Mutation 
  
  export default Mutation;