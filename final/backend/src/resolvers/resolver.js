import bcrypt from "bcrypt"
export const gqlRoot = {
    userHistory: async ({username}, db) => {
      const check_user = await db.UserModel.find({name: username})
      if(check_user.length === 0){
        throw new Error("No user is designated.")
      }
      const all_links = await db.LinkModel.find({owner:username});
      return all_links;
    },
  
    createUser: async ({name, password}, db) =>{
      const check_user = await db.UserModel.find({name: name});
      if(check_user.length !== 0){
        throw new Error("This username is occupied, please try a new one.");
      } 
      const hash = await bcrypt.hash(password, 10);
      // console.log(hash)
      return new db.UserModel({name: name, encrypted_password: hash}).save();
      
    },
  
    logIn: async ({name, password}, db) => {
      const user = await db.UserModel.findOne({name: name});
      if(!user){
        throw new Error("No such users")
      }
      const verifyPassed = await bcrypt.compare(password, user.encrypted_password);
      if(!verifyPassed){
        throw new Error("Log in failed, wrong username or password.")
      }
      return user;
    },
  
    createLink : async ({origin, username}, db) => {
      
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
      // check if this link has already been transformed.
      
      let check_old = await db.LinkModel.find({origin: origin});
      console.log(check_old);
      if(check_old.length !== 0){
        console.log('a')
        return check_old[0];
      }
      // 
      do{
        var short = generateUrl();
        var check_short = await db.LinkModel.find({short: short});
      }
      while(check_short.length !== 0);
  
      return (!username)? new db.LinkModel({      
        origin : origin , short : short   
      }).save() : 
      new db.LinkModel({      
        origin : origin , short : short , owner: username, num_of_view: 0
      }).save();
    
    },
    selfDefLink : async ({origin, short, username}, db) => {
    
      // check if this link has already been transformed.
      if(!username){
        throw new Error("No user is designated.")
      }
      let check_old = await db.LinkModel.find({short: short});
      if(check_old.length !== 0){
        throw new Error("This Link has already been used. Please try a new one.")
      }
      //
      return new db.LinkModel({      
        origin : origin , short : short , owner: username, num_of_view: 0
      }).save();
    
    },
    deleteLink: async ({url, username}, db) => {
      if(!username){
        throw new Error("No user is designated.")
      }
      const task = await db.LinkModel.findOneAndDelete(
          {short: url, owner: username}
        )
      if(!task){
          throw new Error("No such short url exists! " + url)
      }
      return task.id;
    },
    
  };