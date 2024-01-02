# 목표 - 기초적인 API 구현 & PostMan & Git 연습

## 🔍진행 방식

- Node.js와 Express를 사용해 간단한 API를 구현하고자 합니다.
- 기능 요구 사항, 과제 진행 요구사항으로 구성했습니다.
- 두 개의 요구사항을 최대한 지켜주세요.
- 요구 사항에 기재되지 않은 내용이 있다면 자율적으로 구현하고 PR에 올려주세요.

## 🚀 기능 요구 사항

- 클라이언트로부터 GET 요청을 받아 더미 데이터에서 요청된 값의 존재 여부를 확인하고 결과를 반환해주세요.
    - 반환된 결과는 "true" 또는 "false"로 출력해주세요.
- 생성된 API를 [Postman](https://python-programming-diary.tistory.com/175)을 통해 테스트합니다.
- 아래 필수 조건은 맞춰주세요.
    - 팀원별 더미데이터 (각 팀원은 더미데이터를 본인의 이름만 넣고 API를 구현합니다.)
        - 동헌 -> dummyData = ['동헌']
        - 윤기 -> dummyData = ['윤기']
        - 민기 -> dummyData = ['민기']
        - 한나 -> dummyData = ['한나']
    - 포트 번호 = 3000    
    - 라우트 설정 '/search'

## 📮 과제 진행 요구 사항

- 브랜치는 자신의 이름으로 생성해주세요.
- 구현 완료 후 GitHub을 통해 제출해주세요.
    - GitHub의 이슈템플릿을 이용해주세요.
    - PR을 올리실 때 PostMan의 테스트 결과도 올려주세요.
        - true와 false 모두 올려주세요.
    - Main Branch에 Merge는 진행하지 않습니다.
- [커밋](https://www.notion.so/junseopark/696f08c8a95445fd8b7d5ca74481f79b)을 남기실 때 참고 하셔서 커밋 컨벤션을 따라주세요.

# includes와 forEach의 문자 검증의 차이와 그외 방법

- .includes 메서드:
    - .includes는 주어진 문자열이 특정 문자열을 포함하고 있는지 검사합니다.
        - 부분 문자 검증 예: string.includes(substring)
            - 여기서 string은 검사할 전체 문자열이고, 
            substring은 포함되어 있는지 확인하고 싶은 문자열입니다.
        - 전체 문자 검증 예: array.includes(element)
            - .includes는 배열에도 사용할 수 있으며,
            배열의 경우 검사하는 요소가 배열에 정확히 존재하는지 확인합니다.
- forEach 메서드 :
    - forEach 메서드는 배열의 각 요소에 대해 주어진 함수를 실행합니다.
        - forEach는 배열의 모든 요소를 순회하지만, break나 return으로 순회를 중단할 수 없습니다. 즉, 일치하는 요소를 찾더라도 나머지 요소에 대해서도 계속 실행됩니다.
        - 특정 조건을 만족하는 요소를 찾고 바로 순회를 중단하려면, forEach 대신 for 루프나 for...of 루프, Array.prototype.some 또는 Array.prototype.find 메서드를 사용하는 것이 더 적합합니다.
- Set과 has 메서드 :
    - Set 객체는 중복 없이 유일한 값을 저장합니다.
    - Set의 has 메서드는 Set 내에 특정 요소가 존재하는지 확인합니다.
        - 예: set.has(element)
    - Set을 사용하는 경우, 주로 중복을 피하고 검색 성능을 개선할 수 있습니다.
    대규모 데이터에서 특정 요소의 존재 여부를 빠르게 확인하는 데 유용합니다.

## 정리

- .includes는 문자열이나 배열에서 특정 요소의 포함 여부를 간단하게 검사하는 데 적합
-  forEach는 배열의 모든 요소에 대해 특정 작업을 수행할 때 사용합니다.
    그러나 특정 조건을 만족하는 요소를 찾고 나서 즉시 순회를 중단하고 싶다면 some, find, for, for...of 등이 더 적합할 수 있음
- Set과 has 메서드는 중복 없이 요소를 저장하고 빠르게 검색할 때 유용
