FROM node:latest

# 이미지 내에서 명령어를 실행할(현 위치로 잡을) 디렉토리 설정
WORKDIR /usr/src/app

# package.json 및 package-lock.json (있을 경우) 복사
COPY package*.json ./

# 컨테이너 실행시 실행할 명령어
RUN npm install

# 소스 코드 복사
# .dockerignore 제외
COPY . .

# 애플리케이션 실행 명령
CMD ["node", "app.js"]

# 이미지 생성 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .

# 컨테이너 생성 & 실행 명령어
# docker run --name {컨테이너명} -v $(pwd):/usr/src/app -p 5000:5000 {이미지명}