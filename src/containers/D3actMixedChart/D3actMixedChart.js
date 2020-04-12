import React from 'react';
import { Link } from 'react-router';

import navigator from '../../components/Navigator/injectNavigator';
import MixedChartPanel from '../../components/d3act/MixedChartPanel/MixedChartPanel';

import {
  d3actPieExtractDesktopOperatingSystemByYear,
  d3actBarExtractDesktopOperatingSystemByYear
} from '../../resources/helper';

/**
 * This data could be fetch from a server or whatever
 * Since we have it in local, it's prepare only once.
 */
const data = {
  2015: {
    pie: d3actPieExtractDesktopOperatingSystemByYear(2015),
    bar: d3actBarExtractDesktopOperatingSystemByYear(2015)
  },
  2014: {
    pie: d3actPieExtractDesktopOperatingSystemByYear(2014),
    bar: d3actBarExtractDesktopOperatingSystemByYear(2014)
  },
  2013: {
    pie: d3actPieExtractDesktopOperatingSystemByYear(2013),
    bar: d3actBarExtractDesktopOperatingSystemByYear(2013)
  }
};

const D3actMixed = () => (
  <div>
    <h2><Link to="d3act">d3act</Link> / MixedChart</h2>
    <MixedChartPanel data={data} />
    <p>Data comes from <a href="http://stackoverflow.com/research/developer-survey-2015" title="2015 Developer Survey">stackoverflow 2015 Developer Survey</a></p>
  </div>
);

export default navigator()(D3actMixed);
