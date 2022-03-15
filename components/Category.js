import React,{useEffect,useState} from 'react'
import Axios from '../Axios/Axios';
import Nav from './Nav'
import Productitem from './Productitem';
import Results from './Results'

export default function Category({ results }) {
  const [subcategorylist, setsubcategorylist] = useState([])
  const [productlistbysub, setproductlistbysub] = useState([])
  useEffect(async () => {
    try {
      const ele = await Axios(`subcategory/singlecategory/${results.id}`);
      setsubcategorylist(ele.data)
      const product = await Axios(`product/singlesubcategory/${results.id}`);
      setproductlistbysub(product.data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    (subcategorylist.length > 0)?
    <div className="md:flex mt-2 mb-5">
      <div className="md:flex-initial hidden md:block lg:w-1/6 md:w-2/6">
        <div className="bg-gray-300 mx-3 mt-2">
          <h2 className="lg:text-3xl md:text-xl text-center p-2">{results.name}</h2>
          <hr/>
          <div className="flex flex-col items-center space-y-3 pb-20 pt-10">
            
            {subcategorylist?subcategorylist.map( (sub,i) => <h5 className="border-b-4 border-indigo-500 p-2"
              key={i}>{sub.name}</h5>
              ):null
            }
          </div>
        </div>
      </div>
      <div className="md:flex-initial lg:w-5/6 md:w-4/6 space-y-2">
        <h2 className='text-center border p-4 text-2xl font-extrabold mr-2'>{results.name}</h2>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          {productlistbysub.map( result => <Productitem 
              key={result.id} 
              product={result}
            />
            )
          }
          
        </div>
      </div>
    </div>
    :null
  )
}


