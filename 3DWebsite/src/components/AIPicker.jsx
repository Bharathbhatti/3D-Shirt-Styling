import React from 'react';
import CustomButton from './CustomButton'

const AIPicker = ({prompt,setprompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
        <textarea
          placeholder='Ask AI...'
          rows={5}
          value={prompt}
          onChange={(e)=>setprompt(e.target.value)}
        />
        <div className='flex flex-wrap gap-3'>
          {generatingImg?(
            <CustomButton
              type="outline"
              title="Asking AI..."
              customStyles="text-xs"
            />
          ):(
            <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={()=>handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI full"
              handleClick={()=>handleSubmit('full')}
              customStyles="text-xs"
            />
            </>
          )}
        </div>
    </div>
  )
}

export default AIPicker