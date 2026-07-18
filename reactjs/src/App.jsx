import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZpSQkDy9UQsmFwdrlWmsfA8XXojMod4LR3QIEZVHgfyuMcNssR7QwWg&s=10",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$64/hr",
    location: "Seattle, WA, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrRUjtu-Eq85yZmbVWSBrZ6HcOxOcJ6f9ayMD_dXNg1KyN1U7wXBGrYlu&s=10",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, CA, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYlTHzIzf76dQP44xDtvT3fRI3c9C7B5DFVs8TgKXafimXRbehr-5pmE&s=10",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Frontend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Menlo Park, CA, USA",
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Dublin, Ireland",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgIpwOvOEBLHGvkl3Nv-9ZlAYyxFDDu68yVdXREoQMq7MeCcQmMj1oSq3&s=10",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Gatos, CA, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodNTPQrBw6frG0BPXUrOee81xMdSiz4NN2PnUrEsjcg&s=10",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Santa Clara, CA, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/960px-OpenAI_logo_2025_%28symbol%29.svg.png",
    companyName: "OpenAI",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, CA, USA",
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "6 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "San Jose, CA, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bXyYLjOkSY9ERBT2yKZkHh5sKsm9OnMX28twhv1Pi8H5R2i0oSvIXuFw&s=10",
    companyName: "Intel",
    datePosted: "8 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$61/hr",
    location: "Hillsboro, OR, USA",
  },
];
  return (
    <div className="parent">
      {jobOpenings.map(function(job){
        return <Card company={job.companyName} logo={job.brandLogo} postedAgo={job.datePosted} jobTitle={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>;
      })}
    </div>
  )
}

export default App