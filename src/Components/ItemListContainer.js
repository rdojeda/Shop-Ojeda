import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ title }) => {
    
    return (
          <>
                 <h1>{title}</h1>
                <ItemCount stock='5' initial='1' />
        </>
    )
  
};


