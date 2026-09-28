# Yoonjung Jang Portfolio

완성된 정적 웹사이트 코드와 이미지·영상입니다. 관리자 도구는 포함하지 않았습니다.

## GitHub에 올리기
1. GitHub에서 비어 있는 저장소를 만드세요.
2. 이 폴더 전체를 GitHub Desktop으로 커밋하고 Publish repository 하세요. `.github` 폴더도 반드시 포함해야 합니다. ZIP 자체를 올리는 것이 아니라 압축을 푼 파일을 올립니다.
3. 저장소의 Settings → Pages → Source에서 **GitHub Actions**를 선택하세요.
4. Actions → Publish portfolio → Run workflow를 실행하세요. 이후 main에 수정 파일을 올리면 자동으로 반영됩니다.

사진과 영상이 포함되어 있으므로 웹에서 텍스트만 복사하는 대신 GitHub Desktop 또는 아래 명령으로 전체 파일을 올리는 것을 권장합니다.

## 명령 복사하기
이 폴더에서 터미널을 열고 실행하세요. YOUR-USERNAME과 YOUR-REPOSITORY는 실제 GitHub 주소로 바꿔주세요.

```sh
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## 수정할 파일
- 첫 화면: index.html
- 프로젝트: bollo/index.html, blloom/index.html, waymo/index.html
- Play: play/index.html
- About: about/index.html
- 이미지: assets/
- 영상: videos/
- 공통 동작: site.js
- 스타일: 각 HTML에서 연결한 CSS 파일

일반 저장소 주소의 하위 경로와 개인 도메인을 모두 지원하도록 배포 시 경로를 자동 조정합니다. 도메인을 구매한 뒤 Settings → Pages에서 연결할 수 있습니다. 현재 사용자 도메인이나 계정 정보는 설정하지 않았습니다.
