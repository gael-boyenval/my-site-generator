import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Title3, TinyHeading } from '../../atoms/Typography';
import { rem } from '../../../styles/utils';
import { unit, colors, spaces } from '../../../styles/tokens';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: ${rem(unit * 16)};
`;

const Metas = styled.div`
  padding-bottom: ${rem(unit)};
  color: ${colors.base.light};
  border-bottom: solid 1px ${colors.base.light};
`;

const Title = styled.div`
  flex: 100%;
  display: flex;
  padding-top: ${rem(spaces.m)};
`;

class PostItem extends PureComponent {
  static propTypes = {
    post: PropTypes.shape({}).isRequired,
  };

  render() {
    const { post } = this.props;
    const { fields, frontmatter } = post;

    return (
      <Wrapper key={fields.slug}>
        <Metas>
          <TinyHeading>{frontmatter.date}</TinyHeading>
        </Metas>
        <Title>
          <Link to={`${fields.slug}`}>
            <Title3>{frontmatter.title}</Title3>
          </Link>
        </Title>
      </Wrapper>
    );
  }
}

export default PostItem;