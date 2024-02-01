# 3. Iterator

동일한 형태의 데이터 항목을 이처럼 여러 개 가지고 있는 것을 Container 또는 Aggregator라고 합니다.
이 강좌에서는 Aggregator라고 하기로 함.

## Aggregator 종류

- Array
- Linked List
- Tree
- Graph
- DBMS에 저장된 Table 등 ...

Aggregator의 구성 데이터를 얻는 방법이 Aggregator의 종류에 따라서 모두 다름.

이를 통일된 하나의 방법으로 구성 데이터를 가져오기 위해 사용할 수 있는 패턴이 Iterator 패턴임.

