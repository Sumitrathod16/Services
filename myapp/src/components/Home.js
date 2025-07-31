import React from 'react';
import Main from './Main';
import Specialization from './Specialization';
import Exclusive from './Exclusive';
import Unique from './Unique';
import Inner from './Inner';
import Accordion from './Accordion';
import Explore from './Explore';

const accordionItems = [
  { title: 'What is this application about?', content: 'This application provides a platform for users to explore various features and functionalities.' },
  { title: 'How do I get started?', content: 'You can get started by signing up and logging in to your account.' },
  { title: 'What support is available?', content: 'We offer comprehensive support through our documentation and customer service.' },
  { title: 'Are there any tutorials available?', content: 'Yes, we have a range of tutorials available to help you understand how to use the application effectively.' },
];
const Home = () => {
  return (
    <div>
      <Main />
      <Specialization />
      <Explore/>
      <Exclusive />
      <Unique/>
      <Inner/>
      <Accordion items={accordionItems} />
      
    </div>
  );
}
export default Home;