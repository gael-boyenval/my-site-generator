import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'Layout/Container';
import { Margin, Padding } from 'Layout/Spaces';
import Grid from 'Layout/Grid';
import PostItem from 'Molecules/PostItem';
import { SubTitle } from 'Atoms/Typography';
import ButtonLink from 'Atoms/ButtonLink';

class PostList extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Padding vertical="wide">
          <Margin bottom="xxxl">
            <Grid center>
              <Grid.Cell>
                <SubTitle>Mes derniers articles :</SubTitle>
              </Grid.Cell>
              <Grid.Cell size="fill">
                <Margin left="m">
                  <ButtonLink href="">voir le blog</ButtonLink>
                </Margin>
              </Grid.Cell>
            </Grid>
          </Margin>
          <Grid gutter>
            {posts.map(({ node }) => (
              <Grid.Cell key={node.fields.slug} size={1 / 3}>
                <Margin bottom="xxl">
                  <PostItem post={node} />
                </Margin>
              </Grid.Cell>
            ))}
          </Grid>
          <Margin bottom="xxl">
            <ButtonLink href="">voir le blog</ButtonLink>
          </Margin>
        </Padding>
      </Container>
    );
  }
}

export default PostList;
