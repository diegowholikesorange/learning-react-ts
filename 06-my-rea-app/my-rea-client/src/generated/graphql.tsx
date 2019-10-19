import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

