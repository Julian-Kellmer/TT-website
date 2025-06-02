
import React from 'react';


const ProgressBar = ({ 
  currentStep, 
  totalSteps, 
  onStepClick 
}) => {
  return (
    <div className="flex items-center justify-center w-full gap-2 sm:gap-4 py-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div 
              className={`hidden sm:block h-0.5 flex-grow max-w-24 ${
                index < currentStep ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          )}
          <button
            onClick={() => onStepClick(index)}
            className="flex flex-col items-center "
            aria-label={`Ir al paso ${index + 1}`}
          >
            <div 
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-black scale-110' 
                  : index < currentStep 
                    ? 'bg-gray-700' 
                    : 'bg-gray-300'
              }`}
            />
            <span className="text-xs mt-1 text-gray-500">
              {index + 1}
            </span>
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
