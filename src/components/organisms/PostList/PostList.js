import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from '../../layout/Container';
import { Margin } from '../../layout/Spaces';
import Grid from '../../layout/Grid';
import PostItem from '../../molecules/PostItem';
import { SubTitle } from '../../atoms/Typography';
import ButtonLink from '../../atoms/ButtonLink';

class PostList extends PureComponent {
  static propTypes = {
    posts: PropTypes.shape().isRequired,
  };

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Margin bottom="xxxl">
          <Grid center>
            <Grid.Cell>
              <SubTitle>Mes derniers articles :</SubTitle>
            </Grid.Cell>
            <Grid.Cell width="fill">
              <Margin top="s" left="m">
                <ButtonLink href="">voir le blog</ButtonLink>
              </Margin>
            </Grid.Cell>
          </Grid>
        </Margin>
        <Grid gutter>
          {posts.edges.map(({ node }) => (
            <Grid.Cell key={node.id} width={1 / 3}>
              <Margin bottom="xxl">
                <PostItem post={node} />
              </Margin>
            </Grid.Cell>
          ))}
        </Grid>
        <Margin bottom="xxl">
          <ButtonLink href="">voir le blog</ButtonLink>
        </Margin>
      </Container>
    );
  }
}

export default PostList;
