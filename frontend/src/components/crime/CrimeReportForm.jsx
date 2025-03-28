// CrimeReportForm.jsx
import { useDropzone } from 'react-dropzone';
import { useGeolocation } from '../../hooks/useGeolocation';

const CrimeReportForm = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {'image/*': ['.jpeg', '.png'], 'video/*': ['.mp4']},
    maxFiles: 5
  });
  
  const { coords, error: geoError } = useGeolocation();
  const [files, setFiles] = useState([]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div {...getRootProps()} className="border-2 border-dashed p-4 mb-4">
        <input {...getInputProps()} />
        <p>Drag & drop evidence files here, or click to select</p>
      </div>
      
      {geoError && (
        <div className="text-red-500 mb-4">
          Enable location access to automatically detect your position
        </div>
      )}
      
      <MapPicker 
        initialCoords={coords}
        onLocationSelect={(selectedCoords) => {/* Update form state */}}
      />
    </div>
  );
};
