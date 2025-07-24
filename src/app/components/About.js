export default function About({id}){
    return(
        <div id={id} className="w-[100vw] h-[100vh] flex items-center
         justify-center">


<div className="w-[90vw] h-[100vh]  rounded-2xl flex items-start
 justify-between gap-6">


<div className="left w-[45vw] h-[90vh] overflow-hidden object-fit rounded-xl">
<img src="./ubit.jpg"/>
</div>


<div className="right w-[45vw] h-full overflow-hidden  object-fit rounded-xl
flex flex-col gap-3">

<h1 className="text-6xl ">About</h1>
<hr className="text-lime-300"/>
<p className="text-xl font-light">The Department of Computer Science at the University of Karachi, founded in <span className="bg-lime-300 text-black">1984</span>, is a leading institution offering comprehensive programs in Computer Science, from BS to PhD in the field of <span className="bg-lime-300 text-black">Computer Science</span> and <span className="bg-lime-300 text-black">Software Engineering.</span> With a focus on advanced research and practical skills, the department aims to produce <span className="bg-lime-300 text-black">top-tier</span> professionals to meet industry demands. Strong connections with <span className="bg-lime-300 text-black">national</span> and <span className="bg-lime-300 text-black">international</span> organizations ensure that both faculty and students stay aligned with <span className="bg-lime-300 text-black">global</span> academic and <span className="bg-lime-300 text-black">professional</span> standards.</p>

</div>




</div>

        </div>
    )
}