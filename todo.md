---
title : 'To Do List'
date : '2021-10-31'
---
# 해야할 일

### npm start 시작하기 전에...
sass --watch -E utf-8 src/scss/App.scss:src/App.css

### 01월 25일
   - 수연 -
+ [ ] 지금 뜨는 콘텐츠 (좋아요 순으로 뜸) - 좋아요 기능 구현 후 만들기
+ [X] 슬라이드 이미지 겹쳐지는 부분 수정하기

# 공지 사항

git pull 이후 혹시나 css에 문제가 있을 경우에 읽어볼 것

git push후 발생하는 충돌 때문에 gitignore에 App.css와 App.css.map을 추가함.
현재 github 리포지토리에서는 해당 파일이 둘다 삭제된 상태인데 만약 pull한 후에 로컬에 삭제되는 문제가 있을 시
src폴더 밑에 App.css와 App.css.map 을 추가하면 됨.

cache가 남아있을 수 있어 다른 문제가 있을 시
- git rm -r --cached src/App.css
- git rm -r --cached src/App.css.map
두줄의 명령을 실행하면 로컬에서도 삭제됩니다. 
삭제가 발생하면 그 후에 동명의 파일을 다시 추가하면 됩니다. 

# 남은 기능 (02월 09일)
+ 회원가입/로그인 기능 [X]
+ 검색 기능
+ 영상 모달 