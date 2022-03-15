import Link from 'next/link'
import React from 'react'

export default function 
() {
  return (
    <footer className="footer-top row">
			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 bg-red-100">
				<div className="w-full">
				    <div className="p-3">
				      <h4 className="text-lg font-semibold mb-2">ABOUT US</h4>
				      <ul className="space-y-1">
				        <li className="hover:text-yellow-900"><a href="#">Team</a></li>
				        <li className="hover:text-yellow-900"><a href="#">Promotions</a></li>
				        <li className="hover:text-yellow-900"><a href="#">Shop by Store</a></li>
				        <li className="hover:text-yellow-900"><a href="#">Certifications</a></li>
				        <li className="hover:text-yellow-900"><a href="#">Lazada SG</a></li>
				      </ul>
				    </div>
			  	</div>
			  {/* <!-- end single footer --> */}
			  	<div className="w-full">
			    	<div className="p-3">
			      		<h4 className="text-lg font-semibold mb-2">Contact Us</h4>
					    <ul className="space-y-1">
					       <li >Customer Support</li>
					        <li>6261 3456</li>
					       <li>7am - 11pm SGT</li>
					    </ul>
			    	</div>
			  	</div>
			  {/* <!-- end single footer --> */}
			  	<div className="w-full">
			    	<div className="p-3">
			      		<h4 className="text-lg font-semibold mb-2">help</h4>
			      		<ul className="space-y-1">
			        		<li className="hover:text-yellow-900"><a href="#">Suggest a Product</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">term of use</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">freshness promises</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">security and privecy policy</a></li>
			      		</ul>
			    	</div>
			  </div>
			  {/* <!-- end single footer --> */}
			  	<div className="w-full">
			    	<div className="p-3">
			      		<h4 className="text-lg font-semibold mb-2">BUSINESS</h4>
			      		<ul className="space-y-1">
			        		<li className="hover:text-yellow-900"><a href="#">Sell on RedMart</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">Marketing Enquiries</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">Press & Media</a></li>
			        		<li className="hover:text-yellow-900"><a href="#">Partner Portal</a></li>
			      		</ul>
			    	</div>
			  </div>
			  {/* <!-- end single footer --> */}
			</div>
		</footer>
  )
}
