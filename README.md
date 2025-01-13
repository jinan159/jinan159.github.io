# jinan159.github.io

```shell
# rbenv 설치
brew install rbenv

# 셸 초기화 스크립트에 rbenv 초기화
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# 원하는 Ruby 버전 설치
rbenv install 3.4.1
rbenv global 3.4.1

# bundler, jekyll 설치
gem install bundler jekyll

# init jekyll-theme-chirpy
./tools

# 의존성 설치
bundle install

# 서버 구동(http://localhost:4000)
bundle exec jekyll serve
```
