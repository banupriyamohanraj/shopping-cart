
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'
import { useState } from 'react';



function App() {


  let cardvalues = [
    {
      id: 1,
      itemno: 'Item One',
      currency: '$',
      price: 50,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      rating: 4
    },
    {
      id: 2,
      itemno: 'Item Two',
      currency: '$',
      price: 40,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: 3,
      itemno: 'Item Three',
      currency: '$',
      price: 30,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: 4,
      itemno: 'Item Four',
      currency: '$',
      price: 20,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: 5,
      itemno: 'Item Five',
      currency: '$',
      price: 10,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: 6,
      itemno: 'Item Six',
      currency: '$',
      price: 30,
      itemdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    }
  ];

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([0])

  let addToCart = (product) => {
    setCart([...cart, product])
    setTotal(parseInt(total) + parseInt(product.price))

  }

  let removeCart = (item) => {
    setCart(cart.filter(obj => obj.id !== item.id))
    setTotal(total - item.price)
  }


  return (<>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#!">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#!">
                Home
                                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 mt-4 mb-4'>
          <h1>Shop Name</h1>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>
          <h3>Cart</h3>
          <ul className="list-group">
            {
              cart.map((item) => {
                return <div className="list-group-item">
                  {item.itemno}  -  ${item.price}
                  <span>
                    <button className='btn btn-sm btn-danger' onClick={() => {

                      removeCart(item)
                    }}>Remove </button>
                  </span>
                </div>
              })
            }

          </ul>
          <h4>Total : ${total}</h4>
        </div>

        <div className='col-lg-9 '>
          <div className='row'>

            {
              cardvalues.map((obj) => {
                return <Card data={obj} handleCart={addToCart} ></Card>
              })
            }


          </div>


        </div>
      </div>
    </div>

  </>
  );
}

export default App;
