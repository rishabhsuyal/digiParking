import React from 'react'
import {useLocation} from 'react-router-dom';
function Modal() {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>
            <div class="flex justify-center items-center bg-[url('https://imgur.com/Np9oGRF.jpg')] min-h-screen"> <div class="card p-4 my-10 h-auto w-[340px] rounded-[10px] bg-white relative "> 
            <p class="text-xl text-[#083619] font-semibold">Payment Details</p>  <div class="text-sm flex justify-between mt-5"> 
            </div>
              <div class="modal hidden fixed top-3 pr-[73px] z-40 flex w-[380px] "> <div class="content opacity-90 relative rounded-lg flex flex-col justify-center items-center h-24 w-full bg-green-300">
              <p class="text-lg text-white ">Promo Code</p> <p>Your Promo code is XHY778</p>
               <i class="absolute right-3 text-white cursor-pointer top-2 fa fa-close"></i> </div> </div> 
               <div class="text-sm flex justify-between mt-5"> <p>Total</p> <p>₹{location.state}</p> </div> 
               <hr class="mt-5"/> <p class="text-md font-semibold mt-5">
               Card Information</p> <div class="mt-3"> 
               <input class="h-12 border w-full bg-[#eef0ef] rounded-lg text-sm outline-none px-3" type="text" placeholder="Name on Card"/> 
               </div> <div class="mt-5"> 
               <input class="h-12 border w-full bg-[#eef0ef] rounded-lg text-sm outline-none px-3" type="text" placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" />

                </div> <div class="flex gap-5 w-full"> <div class="mt-5 w-full"> 
                <input class="h-12 border w-full bg-[#eef0ef] rounded-lg text-sm outline-none px-3" type="text" placeholder="mm/yyyy" data-slots="my" />
                 </div> <div class="mt-5 w-full">
                  <input class="h-12 border w-full bg-[#eef0ef] rounded-lg text-sm outline-none px-3" type="text" placeholder="000" data-slots="0" data-accept="\d" size="3"/>
                   </div> </div> <button class="submit mt-7 h-12 w-full text-sm text-white rounded-full bg-[#43725c] transition-all cursor-pointer hover:bg-[#16241e]">Submit Payment</button> <p class="text-sm text-center mt-10">For more information about billing view our,<a class="text-red-700" href="#">Terms and Services</a></p> </div>
            </div>
        </div>
    )
}

export default Modal