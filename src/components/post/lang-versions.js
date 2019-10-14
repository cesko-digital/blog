import React from 'react';
import PropTypes from 'prop-types';
import { Author, AuthorDate, LangVersionLink, Padding } from './styles';

const LangVersions = ({ versions }) => (
  <>
    {versions && versions.en && (
      <Author href={versions.en}>
        •{' '} 🇬🇧 English version{' '}
      </Author>
    )}
    {versions && versions.cs && (
      <Author href={versions.cs}>
        •{' '} 🇨🇿 Česká verze{' '}
      </Author>
    )}
  </>
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
