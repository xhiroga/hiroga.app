# AWS (applications for @xhiroga)

## debug

```shell
export USER=hiroga && ln -f ~/.aws/${USER}.config ~/.aws/config && ln -f ~/.aws/${USER}.credentials ~/.aws/credentials
yarn cdk synth
yarn cdk diff
yarn cdk deploy
```

## adr

Architecture Design Records (by [Design It!](https://amzn.to/3e2bHUg))

- @xhiroga が AWS 常に構築する実用的なアプリケーションは全てこのリポジトリで管理する。
  - アプリケーションごとにリポジトリを分けると探せなくなってしまうため。
  - 実用的なアプリケーションとは、例え自分が仕事で AWS に触らない日が来たとしても(=学習の動機が無くなったとしても)運用を続けたいアプリケーションを指す。

## references

### styleguide

基本的に、以下の方針に従って書いています。

- [Open CDK Guide](https://github.com/kevinslin/open-cdk)

### official

- [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)
- [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)
