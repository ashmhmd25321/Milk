import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function Graph() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartRef5 = useRef(null);
  const chartRef6 = useRef(null);
  const chartRef7 = useRef(null);

  useEffect(() => {
    const chartOptions1 = {
      series: [
        {
          name: 'consumption',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'supply',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-01",
          "2018-02",
          "2018-03",
          "2018-04",
          "2018-05",
          "2018-06",
          "2018-07"
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };

    const chartOptions2 = {
      series: [
        {
          data: [
            {
              x: '2008',
              y: [2800, 4500]
            },
            {
              x: '2009',
              y: [3200, 4100]
            },
            {
              x: '2010',
              y: [2950, 7800]
            },
            {
              x: '2011',
              y: [3000, 4600]
            },
            {
              x: '2012',
              y: [3500, 4100]
            },
            {
              x: '2013',
              y: [4500, 6500]
            },
            {
              x: '2014',
              y: [4100, 5600]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: 'rangeBar',
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [['#008FFB', '#00E396']]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Consumption', 'Supply']
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#00E396'],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: 'on'
      }
    };

    const chartOptions3 = {
      series: [
        {
          name: 'Sales',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chart: {
        height: 400,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
          },
        },
      },
      title: {
        text: 'Consumption',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    };

    const chartOptions4 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        height: 500,
      },
      labels: ['milk', 'butter', 'cheese', 'curd', 'youghet'],
      colors: ['#FF9800', '#FF5722', '#4CAF50', '#E91E63', '#2196F3'],
    };

    const chartOptions5 = {
      series: [
        {
          name: 'Consumption',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Supply',
          data: [44, 76, 78, 13, 43, 10],
        }
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: 'Radar Chart - Multi Series'
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      }
    };

    const chartOptions6 = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['2010', '2011', '2012', '2013', '2014', '2013', '2014',
          '2015', '2016', '2017'
        ],
      }
    };

    const chartOptions7 = {
      series: [76, 67, 61, 90],
          chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['milk', 'butter', 'cheese', 'youghet'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
        };

    const chart1 = new ApexCharts(chartRef1.current, chartOptions1);
    const chart2 = new ApexCharts(chartRef2.current, chartOptions2);
    const chart3 = new ApexCharts(chartRef3.current, chartOptions3);
    const chart4 = new ApexCharts(chartRef4.current, chartOptions4);
    const chart5 = new ApexCharts(chartRef5.current, chartOptions5);
    const chart6 = new ApexCharts(chartRef6.current, chartOptions6);
    const chart7 = new ApexCharts(chartRef7.current, chartOptions7);


    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();
    chart6.render();
    chart7.render();
    

    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
      chart5.destroy();
      chart6.destroy();
      chart7.destroy();
    };
  }, []);

  return (
    <div className='new-container'> 
      <br />
      <br />
      <div className="dashboard-container">
        <div className="chart-container">
          <div id="chart" ref={chartRef1} />
        </div>
        <div className="pie-chart-container">
          <div id="pie-chart1" ref={chartRef2} />
        </div>
        <div className="chart-container">
          <div id="chart2" ref={chartRef3} />
        </div>
        <div className="pie-chart-container">
          <div id="pie-chart2" ref={chartRef4} />
        </div>
        <div className="radar-chart-container">
          <div id="chart3" ref={chartRef5} />
        </div>
        <div className="bar-chart-container">
          <div id="chart4" ref={chartRef6} />
        </div>
        <div className="chart-container">
          <div id="chart7" ref={chartRef7} />
        </div>
      </div>
    </div>
  );
} 
