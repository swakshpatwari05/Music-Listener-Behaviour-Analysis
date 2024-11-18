// import React, { useState } from 'react';
// import axios from 'axios';
// import { Pie, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// const MusicComposer = () => {
//   const [data, setData] = useState(null);
//   const [chartType, setChartType] = useState('pie');
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('/api/music-composer/view1');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   const renderChart = () => {
//     if (!data) return null;

//     const chartData = {
//       labels: data.labels,
//       datasets: [
//         {
//           label: 'Music Data',
//           data: data.values,
//           backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#4BC0C0',
//             '#9966FF',
//             '#FF9F40',
//           ],
//         },
//       ],
//     };

//     if (chartType === 'pie') {
//       return <Pie data={chartData} />;
//     } else if (chartType === 'bar') {
//       return <Bar data={chartData} />;
//     }
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Music Composer Analysis</h2>
//       <button onClick={fetchData} disabled={loading}>
//         {loading ? 'Loading...' : 'View 1'}
//       </button>
//       {data && (
//         <div style={{ marginTop: '20px' }}>
//           <button onClick={() => setChartType('pie')}>Pie Chart</button>
//           <button onClick={() => setChartType('bar')}>Bar Chart</button>
//         </div>
//       )}
//       <div style={{ marginTop: '40px' }}>{renderChart()}</div>
//     </div>
//   );
// };

// export default MusicComposer;

// MusicComposer.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import './MusicComposer.css'
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const MusicComposer = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchAgeGroupData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/music-composer/view1');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   const renderChart = () => {
//     if (!data) return null;

//     const chartData = {
//       labels: data.ageGroups,
//       datasets: [
//         {
//           label: 'No. of Listeners per Age Group',
//           data: data.counts,
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1.5,
//         },
//       ],
//     };

//     return (
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: 'Number of Listeners per Age Group',
//             },
//           },
//         }}
//       />
//     );
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Music Composer Analysis</h2>
//       <button onClick={fetchAgeGroupData} disabled={loading}>
//         {loading ? 'Loading...' : 'View 1'}
//       </button>
//       <div style={{ marginTop: '40px' }}>{renderChart()}</div>
//     </div>
//   );
// };

// export default MusicComposer;

import React, { useState } from 'react';
import axios from 'axios';
import './MusicComposer.css';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const MusicComposer = () => {
  const [ageGroupData, setAgeGroupData] = useState(null);
  const [demographicData, setDemographicData] = useState(null);
  const [loadingView1, setLoadingView1] = useState(false);
  const [loadingView2, setLoadingView2] = useState(false);

  // Fetch data for View 1 (No. of listeners per age group)
  const fetchAgeGroupData = async () => {
    setLoadingView1(true);
    try {
      const response = await axios.get('http://localhost:5000/api/music-composer/view1');
      setAgeGroupData(response.data);
    } catch (error) {
      console.error('Error fetching data for View 1:', error);
    }
    setLoadingView1(false);
  };

  // Fetch data for View 2 (No. of listeners per demographic/place)
  const fetchDemographicData = async () => {
    setLoadingView2(true);
    try {
      const response = await axios.get('http://localhost:5000/api/music-composer/view2');
      setDemographicData(response.data);
    } catch (error) {
      console.error('Error fetching data for View 2:', error);
    }
    setLoadingView2(false);
  };

  // Render Bar Chart for View 1
  const renderAgeGroupChart = () => {
    if (!ageGroupData) return null;

    const chartData = {
      labels: ageGroupData.ageGroups,
      datasets: [
        {
          label: 'No. of Listeners per Age Group',
          data: ageGroupData.counts,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'
          ],
          borderColor: '#fff',
          borderWidth: 2,
          borderRadius: 5,
        },
      ],
    };

    return (
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                },
              },
            },
            title: {
              display: true,
              text: 'Number of Listeners per Age Group',
              font: {
                size: 18,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
      />
    );
  };

  // Render Pie Chart for View 2
  const renderDemographicChart = () => {
    if (!demographicData) return null;

    const chartData = {
      labels: demographicData.places,
      datasets: [
        {
          label: 'No. of Listeners per Demographic',
          data: demographicData.counts,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'
          ],
          hoverOffset: 4,
        },
      ],
    };

    return (
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                },
              },
            },
            title: {
              display: true,
              text: 'Number of Listeners per Demographic (Place)',
              font: {
                size: 18,
              },
            },
          },
        }}
      />
    );
  };

  return (
    <div className="music-composer-container">
      <h2 className="title">Music Composer Analysis</h2>
      
      {/* Buttons for fetching data */}
      <div className="button-group">
        <button className="fetch-button" onClick={fetchAgeGroupData} disabled={loadingView1}>
          {loadingView1 ? 'Loading View 1...' : 'View 1 (Age Groups)'}
        </button>
        
        <button className="fetch-button" onClick={fetchDemographicData} disabled={loadingView2}>
          {loadingView2 ? 'Loading View 2...' : 'View 2 (Demographics)'}
        </button>
      </div>

      {/* Charts for each view */}
      <div className="chart-container">{renderAgeGroupChart()}</div>
      <div className="chart-container">{renderDemographicChart()}</div>
    </div>
  );
};

export default MusicComposer;
