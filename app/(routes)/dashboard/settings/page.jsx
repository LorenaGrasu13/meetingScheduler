import React from 'react';

function Settings() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Settings</h2>
      <hr className='my-7' />
 
      {/* Temă */}
      <div className='mb-10'>
        <h3 className='font-semibold text-xl'>Theme Settings</h3>
        <div className='mt-4'>
          <label className='block mb-2'>Select Theme:</label>
          <select className='p-2 border rounded w-full'>
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
      </div>

      {/* Salvare Setări */}
      <div>
        <button className='px-4 py-2 bg-purple-400 text-white rounded'>Save Settings</button>
      </div>
    </div>
  );
}

export default Settings;
