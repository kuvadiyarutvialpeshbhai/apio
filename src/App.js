import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.min.css';
const axios = require('axios');
function App() {
  const [char,setchar] = useState([]);
  useEffect(() => {
  
    return () => {
      axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
    setchar(response.data.products);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }
  }, [])
  
  
  return (
   <>
   <div className="container">
    <div className="row">
    
        {
          char.map((item) => {
            return (
              <>
               <div className="col-4">
              <div className="card1 my-5">
                <img src={item.thumbnail} className="" alt="" />
                <h3  className="text-center my-2">{item.title}</h3>
                <p className="text-center p1">{item.description}</p>
                <div className="d-flex me-2">
                  <p className="ms-5 text-center p2"><h5 className="mb-1"><font color="#fb8500">BRAND</font></h5>{item.brand}</p>
                  <p className="ms-5 text-center p2"><h5 className="mb-1"><font color="##38b000"><i class="fa-solid fa-indian-rupee-sign fs-3"></i></font></h5>Rs.: {item.price}.00</p>
                  <p className="ms-5 text-center p2"><h5 className="mb-1"><font color="#fb8500">DISCOUNT</font></h5>{item.discountPercentage}%</p>
                </div>
                <div className="d-flex mx-5">
                <p className="mx-5 text-center p2"><h5 className="mb-1"><font color="#fb8500">CATEGORY</font></h5>{item.category}</p>
                <p className="p2"><h5 className="text-center mb-1"><font color="#fb8500">STOCK</font></h5>{item.stock}</p>
                </div>
                <p className="mx-5 mt-0 text-center"><h5><font color="#fb8500"><i class="fa-solid fa-ranking-star fs-2"></i></font></h5>{item.rating}</p>
                <div className="d-flex text-center s1">
                  <p className="i1"><i class="fa-regular fa-eye"></i></p>
                  <p className="i2"><i class="fa-solid fa-heart"></i></p>
                  <p className="i3"><i class="fa-solid fa-barcode"></i></p>
                  <p className="i4"><i class="fa-solid fa-cart-shopping"></i></p>
                </div>
              </div>
               </div>

              </>
            )
          })
        }
      
    </div>
   </div>
  
  
   </>
  );
}
 

export default App;
