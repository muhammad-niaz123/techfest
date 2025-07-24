export default function Event({id}) {
    const cards = [
      {
        image: "./recuritment.png",
        heading: "Recruitment Drives",
        paragraph:
          "Companies & startups will get a chance to set up recruitment drives & walk-in interviews.",
      },
      {
        image: "./hackathon.png",
        heading: "Coding Hackathons",
        paragraph:
          "Coding Hackathons and Gaming Competitions will be held to spark interest and participation.",
      },
      {
        image: "./digital.png",
        heading: "Digital & Tech Stalls",
        paragraph:
          "Companies & startups will get a chance to showcase their innovation and products.",
      },
      {
        image: "./networking.png",
        heading: "Networking",
        paragraph:
          "An open space to connect with professionals, alumni, and sponsors.",
      },
      {
        image: "./custom.png",
        heading: "Custom Engagement Opportunities",
        paragraph:
          "We value your input and are open to incorporating additional activities that align with your goals.",
      },
      {
        image: "./seminar.png",
        heading: "Seminars & Ted Talks",
        paragraph:
          "Lectures and seminars discussing recent development in technology and the digital world.",
      },
    ];
  
    return (
        <>
       
      <div
      id={id}
      className="w-[100vw] bg-black py-10 flex flex-col justify-center 
      items-center gap-9">

      <div>
        <h1 className="text-center text-6xl">Event Activities</h1>
        </div>




        <div className="w-[90vw] flex items-start justify-between
        flex-wrap gap-16">
          

{
    cards.map((c,i)=>{
        return(

<div key={i} className="w-[40%] flex justify-between
rounded-xl flex-col items-center gap-5  border-2 border-lime-300 
  hover:shadow-[0_0_5px_2px_#00ff00] ">

<img src={`${c.image}`} className="w-[60px] filter invert"/>
<h1 className="text-[30px] text-center leading-8">{c.heading}</h1>
<p className="text-[16px] text-center leading-5">{c.paragraph}</p>

</div>
        )
    })


}



        </div>




      </div>
      </>
    );
  }
  