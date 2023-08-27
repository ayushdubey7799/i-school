export const getQuestion = (id) => {

   const data = [
    {
      "questionId": 1,
      "question": "Explain the concept of Virtual DOM in React and how it improves performance."
    },
    {
      "questionId": 2,
      "question": "What are the differences between CSS Grid and Flexbox? When would you use each?"
    },
    {
      "questionId": 3,
      "question": "What is lazy loading in the context of web applications? How can it be implemented?"
    },
    {
      "questionId": 4,
      "question": "Describe the purpose and usage of CORS (Cross-Origin Resource Sharing). How do you handle CORS issues?"
    },
    {
      "questionId": 5,
      "question": "What are Web Workers in HTML5 and how can they improve the performance of a web application?"
    },
    {
      "questionId": 6,
      "question": "Explain the role of requestAnimationFrame in animations. How does it differ from using setTimeout or setInterval?"
    },
    {
      "questionId": 7,
      "question": "What is the role of a service worker in Progressive Web Apps (PWAs)? How does it enable offline functionality?"
    },
    {
      "questionId": 8,
      "question": "Discuss the pros and cons of using CSS preprocessors (e.g., Sass) in web development."
    },
    {
      "questionId": 9,
      "question": "Explain the concept of code splitting and dynamic imports in modern JavaScript frameworks."
    },
    {
      "questionId": 10,
      "question": "What are the main differences between localStorage and sessionStorage? When would you use each?"
    }
  ];
  if(id>data.length)return null;
  return data[id-1];
  
}