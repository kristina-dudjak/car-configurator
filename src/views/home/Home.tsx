import React from 'react';

export const Home: React.FC = () => {
  return (
    <section>
      <div>
        <span>View saved configurations</span>
        <button>Configure a car</button>
      </div>
      <div>
        <div>
          You haven’t configured any cars yet. You may choose to{' '}
          <a>configure some now.</a>
        </div>
      </div>
    </section>
  );
};
