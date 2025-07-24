export default function Sponsor({id}){
    return(
  
  <div id={id} className="w-[100vw] mt-[20%] gap-20  flex-col flex items-center justify-center">



<div className="flex flex-col items-center justify-center w-full gap-5">
<h1 className="text-6xl">Why Sponsor Us?</h1>
<p className="text-center w-[70%]">Participate as a mentor, gain exclusive recruitment access, and showcase your brand to a wide audience of aspiring professionals and industry leaders.</p>
</div>







<div className="w-[90vw] min-h-[70vh] flex flex-col gap-20 items-center">







<div className="w-full border-2 border-lime-300  hover:shadow-[0_0_5px_2px_#00ff00]
 flex flex-col gap-5 p-4 rounded-xl">

<h1 className="text-4xl text-center">Sponsorship Benefits</h1>

<div className="">
<p>1. <span className="text-xl">Brand Exposure:</span> High visibility on event materials, social media, and newsletters.
</p>


<p>2. <span className="text-xl" >Mentorship Opportunities:</span> Build connections with emerging talent.
</p>


<p>3. <span className="text-xl">Exclusive Recruitment Access:</span> Secure top talent early with access to students and alumni.
</p>


<p>4. <span className="text-xl">Customized Branding:</span> Tailor sponsorship opportunities to meet your goals.
</p>

</div>

</div>






<div className="pckges flex flex-col w-full gap-10">

<h1 className="text-6xl text-center">Sponsorship Packages
</h1>
 
<div className="flex items-start justify-between ">


<div className="left flex flex-col gap-3.5 border-2 hover:shadow-[0_0_5px_2px_#4D4F51]
 border-[#4D4F51] rounded-xl">
    
    <div className="flex flex-col gap-2">

    <h1 className="text-3xl">Platinum Sponsor</h1>
<h1><span className="text-2xl">Investment:</span>
 <span className="bg-[#4D4F51]  rounded">900,000 PKR</span></h1>

</div>

<div>
    <p>1.  Exclusive Event Partner Status</p>
    <p>2.  Premium Visibility on Event Materials</p>
    <p>3.  Generous Stall Size Setup (30x10)</p>
    <p>4.  10 Guest Alumni Dinner Passes</p>
    <p>5.  Panelist Participation and Stage Time</p>
</div>

</div>





<div className="right flex flex-col gap-3.5 border-2 hover:shadow-[0_0_5px_2px_#D4AF37] border-[#D4AF37] rounded-xl">

 
<div className="flex flex-col gap-2">

<h1 className="text-3xl">Gold Sponsor</h1>
<h1><span className="text-2xl">Investment:</span>
 <span className="bg-[#D4AF37] rounded text-black">700,000 PKR</span></h1>

</div>

<div>
<p>1.  Marketing on Social Media Platforms</p>
<p>2.  Host a Breakout Session or Workshop</p>
<p>3.  Logo Placement on Merchandise</p>
<p>4.  6 Guest Alumni Dinner Passes</p>
<p>5.  Panelist Participation and Stage Time</p>
</div>

    
</div>


</div>


</div>






</div>



        </div>
    )
}