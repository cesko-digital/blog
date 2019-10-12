import React from 'react';
import PropTypes from 'prop-types';
import { LangVersionLink, Padding } from './styles';

const LangVersions = ({ versions }) => (
  <div>
    {versions && versions.en && (
        <p>
          <LangVersionLink to={versions.en}>
            This article is available also in English.
          </LangVersionLink>
        </p>

    )}
    {versions && versions.cs && (
        <p>
          <LangVersionLink to={versions.cs}>
            Tento článek je dostupný i v Češtině.
          </LangVersionLink>
        </p>

    )}
  </div>
);

LangVersions.propTypes = {
  versions: PropTypes.shape({
    en: PropTypes.string,
    cs: PropTypes.string,
  }),
};

LangVersions.defaultProps = {
    versions: {}
};

export default LangVersions;
