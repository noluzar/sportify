import React from 'react';
import { GoGoal } from "react-icons/go";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 text-lg">
      <h1 className='font-bold p-6 mx-10 text-3xl'>About Us</h1>
      <div className='flex justify-between items-center mx-10 p-6'>
        <div className='w-[20%] space-y-5'>
          <div className='space-y-4'>
            <GoGoal className='bg-gray-400 p-2 size-9 rounded text-white' />
            <h2 className='font-bold'>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Amet illo expedita eos fuga vel assumenda repellendus mollitia
              repellat deleniti enim quasi ullam, illum natus minima at dolore
              voluptate, laborum velit!</p>
          </div>
          <div className='space-y-4'>
            <GoGoal className='bg-gray-400 p-2 size-9 rounded text-white' />
            <h2 className='font-bold'>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Amet illo expedita eos fuga vel assumenda repellendus mollitia
              repellat deleniti enim quasi ullam, illum natus minima at dolore
              voluptate, laborum velit!</p>
          </div>
        </div>
        <div className='w-[20%] space-y-5'>
        <div className='space-y-4'>
            <GoGoal className='bg-gray-400 p-2 size-9 rounded text-white' />
            <h2 className='font-bold'>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Amet illo expedita eos fuga vel assumenda repellendus mollitia
              repellat deleniti enim quasi ullam, illum natus minima at dolore
              voluptate, laborum velit!</p>
          </div>
          <div className='space-y-4'>
            <GoGoal className='bg-gray-400 p-2 size-9 rounded text-white' />
            <h2 className='font-bold'>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Amet illo expedita eos fuga vel assumenda repellendus mollitia
              repellat deleniti enim quasi ullam, illum natus minima at dolore
              voluptate, laborum velit!</p>
          </div>
        </div>
        <div className='w-[30%]'>
        <img
        src='./school.jpg'
        className='w-full h-auto rounded-lg'
        />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
