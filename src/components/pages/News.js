import React from 'react';
import './News.css';
import Navbar from '../Navbar';

const newsArticles = [
  {
    id: 1,
    title: 'Milk powder to be further reduced',
    content: 'Milk powder importers have expressed their willingness to further reduce milk powder prices. They had mentioned this during a meeting with Trade Ministry officials on Wednesday. Earlier 1kg packet of imported milk powder was reduced by Rs.200 and further price reductions are expected in early May.',
    date: 'May 20, 2023',
    image: 'images/news1.jpg'
  },
  {
    id: 2,
    title: 'SRI LANKA’S DAIRY PRODUCTION DROPS BY 30%',
    content: 'Dairy producers in Sri Lanka have confirmed that dairy production has dropped by 30%. The Chairman of the Dairy Producers Association A. Gunasekara said that the shortage of animal feed and the related matter had contributed to this situation.',
    date: 'May 19, 2023',
    image: 'images/news2.jpg'
  },
  {
    id: 3,
    title: 'Sustainable Dairy Development: A Value Chain Approach',
    content: 'The dairy industry of Sri Lanka is in a transitional stage. The newly emerging large and medium scale dairy operations may convert dairy from livelihood operation to a profitable industry. Accommodation of local production in the market chain has become a challenge. Therefore, the development of infrastructure such as milk collecting networks, facilities for value addition and further processing and quality assurance will be required for smooth functioning of the value chain.',
    date: 'May 18, 2023',
    image: 'images/news3.jpg'
  },
  {
    id: 4,
    title: 'Milk production per cow reaches record levels in the US',
    content: 'The level of milk production per cow in the 23 major states in the US reached record levels in June, the latest figures released by the US Department of Agriculture (USDA) show. During the sixth month of this year, milk production in the 23 major states totalled 16.9 billion pounds; this was an increase of 1.7% compared to the same month last year.',
    date: 'May 18, 2023',
    image: 'images/news4.jpg'
  },
  {
    id: 5,
    title: 'How shortfall in milk will impact the market',
    content: 'With maximum temperatures not really surging enough to cause yield losses in wheat, concerns over cereal inflation are slowly abating. That falling global prices have made imports more feasible — Chicago wheat futures are trading below $260 per tonne, against the $500-plus peaks scaled a year ago — adds to the relative comfort. But this isn’t so in milk, where October-March is the “flush” season when buffaloes and cows normally produce more.',
    date: 'May 18, 2023',
    image: 'images/news5.jpg'
  },
  {
    id: 6,
    title: 'Milk, cheese and egg costs rise at fastest pace in 45 years',
    content: 'The price of shop-bought milk, cheddar cheese and eggs has risen by an eye-watering 27.3% in the previous 12 months. Earlier today it was announced there has been a higher-than-expected leap in the rate of inflation, taking it to 11.1% last month. Increases across a range of items - including gas, electricity, food and drink - are some of the biggest drivers of inflation, while a decrease in motor fuels partially offsets the rise.',
    date: 'May 18, 2023',
    image: 'images/news6.jpg'
  },
];

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="news-container">
        <h1>Latest News</h1>
        {newsArticles.map((article) => (
          <div className="news-article" key={article.id}>
            <img className="news-image" src={article.image} alt={article.title} />
            <div className="news-content">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-date">{article.date}</p>
              <p className="news-description">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;