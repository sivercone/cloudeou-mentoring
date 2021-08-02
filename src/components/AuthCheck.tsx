import React from 'react';
import { sessionMemory } from '../utils/sessionMemory';

const AuthCheck = (WrappedComponent: React.ComponentType) => {
   return (props: JSX.IntrinsicAttributes) => {
      if (!sessionMemory.get('auth')) {
         return <p>you are not authorized !</p>;
      } else {
         return <WrappedComponent {...props} />;
      }
   };
};

export default AuthCheck;
