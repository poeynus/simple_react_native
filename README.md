# 첫 리액트 네이티브 앱 개발

백엔드 => https://github.com/poeynus/together_eat

<details>
<summary>첫 리액트 네이티브 - 환경 설정</summary>
<div markdown="1">

First time react native

환경 설정 참고
https://velog.io/@taese0ng/M1-%EB%A7%A5%EC%97%90%EC%84%9C-React-Native-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0

겨우 실행까지 했다.

Design
react-native-element
https://reactnativeelements.com/docs/airbnbrating

react-native에서 console.log를 보는법
에뮬레이터에서 command + d 누르고 개발자 도구 열면 됨
https://stackoverflow.com/questions/30115372/how-to-do-logging-in-react-native

Router
react-navigator
https://reactnavigation.org/docs/getting-started/ - Router Success!

Checkbox
react-native-boucy-checkbox
https://www.npmjs.com/package/react-native-bouncy-checkbox

Dotenv
react-native-dotenv
https://www.npmjs.com/package/react-native-dotenv

무지함의 극치인 하루였다.
회원 가입을 독특하게 PUT으로 설정 해놓고서는 POST로 계속 보내면서 삽질을 하고 있었다.
2일이 걸렸는데 회원 가입을 POST로 만든다는 고정 관념을 내려 놓고 코드를 잘 보고 하자

react-native의 localStorage
react-native-async-storage
https://github.com/react-native-async-storage/async-storage

ios different android
https://stackoverflow.com/questions/46736268/react-native-asyncstorage-clear-is-failing-on-ios

test id pw = Dfg, Dfg

react-native dropdown
react-native-element-dropdown
https://www.npmjs.com/package/react-native-element-dropdown

react native 맛보기 끝 재밌게 했다 1주일 정도 몰두해서 했네

</div>
</details>

---

# 화면 - 80% 개발 완료

|                                                      약관 동의 조건 확인                                                      |                                                      회원 가입 및 중복 테스트                                                      |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![약관 동의 조건 확인](https://user-images.githubusercontent.com/68466791/154900806-553befda-103b-435c-8ff5-f5e3cebd0a0d.gif) | ![회원 가입 및 중복 테스트](https://user-images.githubusercontent.com/68466791/154900317-c3e81836-b2b2-4228-addd-ca524ce8e986.gif) |

|                                                      이메일로 아이디 찾기                                                       |                                                      이메일 인증                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| !![이메일로 아이디 찾기](https://user-images.githubusercontent.com/68466791/154900948-5550b2dc-3ec4-4128-a42f-a833632d6e69.gif) | !![이메일 인증](https://user-images.githubusercontent.com/68466791/154901015-4d7c1a63-0e7d-4e6f-ae09-904aaf1a7067.gif) |

|                                                      이메일로 코드 보내기                                                      |                                                      이메일로 비밀번호 재설정                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![이메일로 코드 보내기](https://user-images.githubusercontent.com/68466791/154901065-37c4a6ae-2f43-4e5f-8b59-58be4f8c158f.gif) | ![이메일로 비밀번호 재설정](https://user-images.githubusercontent.com/68466791/154900982-be6dc1e9-132f-40d5-88ad-ac3f3c748a6e.gif) |

|                                                              글 목록 확인 및 작성                                                               |                                                               글 보기 및 로그 아웃                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![글 리스트 확인 및 작성](https://user-images.githubusercontent.com/68466791/154901077-2cf0a273-00ae-4ba3-ae17-a6d64cf04515.gif) | ![글 상세 보기 및 로그아웃](https://user-images.githubusercontent.com/68466791/154901090-98c6cc1c-5e95-4100-933a-0807f325298e.gif) |
