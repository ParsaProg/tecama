import { Chart, defaults } from "chart.js/auto";
import { color } from "chart.js/helpers";
import { Bar, Pie } from "react-chartjs-2";
export default function LineChart() {
  Chart.defaults.font.size = 20;
  Chart.defaults.font.family = "Roboto";
  const data = [
    {
      backgroundColor: "#306794",
      label: "Python",
      cost: 50,
    },
    {
      backgroundColor: "#e8d44d",
      label: "JS",
      cost: 40,
    },
    {
      backgroundColor: "#4e2acd",
      label: "C#",
      cost: 35,
    },
    {
      backgroundColor: "#c9619c",
      label:"Kotlin",
      cost: 20,
    },
  ];
  return (
    <div className="line-chart-container">
      {window.innerWidth > 1000 ? <Bar
        height={50}
        dir="ltr"
        style={{
          margin: "auto",
          width:  "90%",
          height: "90%",
        }}
        data={{
          labels: data.map((data) => data.label),
          datasets: [
            {
              label: "محبوبیت",
              data: data.map((data) => data.cost),
              backgroundColor: data.map((data) => data.backgroundColor),
            },
          ],
        }}
        options={{
          responsive: true,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              display: true,
              color: "black",
            },
            
          },
        }}
      />: <Pie
      height={50}
      dir="ltr"
      style={{
        margin: "auto",
        width:  "70%",
        height: "70%",
      }}
      data={{
        labels: data.map((data) => data.label),
        datasets: [
          {
            label: "محبوبیت",
            data: data.map((data) => data.cost),
            backgroundColor: data.map((data) => data.backgroundColor),
          },
        ],
      }}
      options={{
        responsive: true,
        indexAxis: "y",
        plugins: {
          legend: {
            display: true,
            labels: {

              color: "white"
            },
          },
          datalabels: {
            datalabels: {
              display: true,
              color: "black",
            },
          },
        },
      }}
    />}
    </div>
  );
}
