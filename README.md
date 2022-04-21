# Getting Started

1. Setting

```bash
yarn add graphql-yoga
yarn global add nodemon
yarn add @babel/core --dev
yarn add @babel/preset-env --dev
yarn add @babel/node --dev
echo '{"presets": ["@babel/preset-env"]}' > babel.config.json
yarn start
```

## GraphQL

### Over-fetching

`/users/ GET`
기존에 REST API는 유저의 이름만 얻으려면 유저에 대한 모든 정보를 받다보니 여러모로 효과적이지 못했다. 이렇게 요청한 영역의 정보보다 많은 정보를 서버에서 받는 것을 **Over-fetching** 이라고 한다.
GraphQL은 오버패칭 없이 DB에 오직 원하는 정보만 요청할 수 있다.

### Under-fetching

어떤 하나를 완성하기위해 다른 요청들을 해야할 때 발생한다. 예를들어 페이스북 앱을 실행하면 피드, 알림 등 다양한 정보를 요청하는데 이 요청이 다 오가야만 앱이 시작된다. 이러한 부분을 언더패칭이라고 한다. 즉 REST에서 앱을 실행시키기 위해 많은 소스를 요청해야한다. GraphQL은 한 Query에 정확하게 원하는 정보만 받을 수 있다.

GraphQL에서 URL은 존재하지 않는다.

```
/feed/
/notifications/
/user/1/
```

이 모든 것을 한 개의 query로 만들 수 있다.

```javascript
query{
    feed {
        comments
        likeNumber
    }
    notifications{
        isRead
    }
    user{
        username
        age
    }
}

//자바스크립트에서 보낸 오브젝트
{
    feed : [
        {
            comments:1,
            likeNumber:20
        }
    ],
    notifications:[
        {
            isRead : true
        },
        {
            isRead : false
        }
    ],
    user:{
        username : "Han"
        age: 29
    }
}

```

이렇게 요청한 것만 정확하게 보내준다.

## graphql-yoga

```bash
yarn add graphql-yoga
```

GraphQL Server를 쉽게 구축하게 도와준다

## REST API vs GraphQL

|     | REST API                                                                   | GraphQL                                                                         |
| --- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | Resource형태 정의와 데이터 요청 방법이 연결되어 있다.                      | Resource형태 정의와 데이터 요청이 완전히 분리되어 있다.                         |
| 2   | Resource크기와 형태를 서버에서 결정한다.                                   | Resource정보만 정의하고, 필요한 크기와 형태는 Client단에서 요청 시 결정한다.    |
| 3   | URI가 Resource를 나타내고 Method가 작업의 유형을 나타낸다.                 | GQL Schema가 Resource를 나타내고 Quert, Mutation 타입이 작업의 유형을 나타낸다. |
| 4   | 여러 Resource에 접근하고자 할 때 여러 번의 요청이 필요하다.                | 한번의 요청에서 여러 Resource에 접근 가능하다.                                  |
| 5   | 각 요청은 해당 엔드포인트에 정의된 핸들링 함수를 호출하여 작업을 처리한다. | 요청 받은 각 필드에 대한 resolver를 호출하여 작업을 처리한다.                   |
