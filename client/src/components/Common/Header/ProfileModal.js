import { css } from '@emotion/react';
import request from '../../../api/index';
import Button from '../Button';
import Alarm from './Alarm';

function ProfileModal({
  userInfo,
  handleLogoutClick,
  handleModifyClick,
  alarm,
  setAlarm,
}) {
  // 삭제 버튼 클릭 핸들러
  const handleDeleteAll = () => {
    request
      .delete(`/api/alarm?member-id=${userInfo.memberId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setAlarm([]);
  };

  const handleDeleteAlarm = (alarmId) => {
    request.delete(`/api/alarm/${alarmId}`);
    setAlarm(
      alarm.filter((item) => {
        if (item.alarmId !== alarmId) return item;
      })
    );
  };
  return (
    <div
      css={css`
        display: flex;
        position: absolute;
        top: 83px;
        right: 0;
        width: 350px;
        height: 650px;
        padding: 1rem;
        flex-direction: column;
        border: 2px solid #0b6ff2;
        border-radius: 5px;
        background-color: #f0f8ff;

        &::before {
          content: '';
          position: absolute;
          right: 15px;
          top: -20px;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-bottom: 20px solid #0b6ff2;
        }
      `}
    >
      {/* 프로필 사진 / 닉네임 / 이메일 컨테이너 */}
      <div
        css={css`
          display: flex;
          flex: 1 0;
          width: 100%;
          height: 64px;
          margin-bottom: 1rem;
        `}
      >
        <div
          css={css`
            display: inline-block;
            height: 100%;
            margin-right: 0.8rem;
          `}
        >
          <img
            src="/logo192.png"
            alt="프로필사진"
            css={css`
              height: 100%;
            `}
          />
        </div>
        <div
          css={css`
            display: inline-flex;
            height: 100%;
            padding: 0.5rem 0;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              height: 50%;
              line-height: 200%;
            `}
          >
            {userInfo.nickname}
          </div>
          <div
            css={css`
              height: 50%;
              line-height: 200%;
            `}
          >
            {userInfo.email}
          </div>
        </div>
      </div>
      {/* 프로필 수정 / 로그아웃 버튼 컨테이너 */}
      <div
        css={css`
          display: flex;
          flex: 1 0;
          width: 100%;
          height: 6rem;
          margin-bottom: 1rem;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            height: 50%;
            margin-bottom: 0.5rem;
            align-items: center;
          `}
        >
          <Button
            text={'프로필 수정'}
            type={'profile_modal_blue'}
            onClick={handleModifyClick}
          />
        </div>
        <div
          css={css`
            display: flex;
            height: 50%;
            align-items: center;
          `}
        >
          <Button
            text={'로그아웃'}
            type={'profile_modal_grey'}
            onClick={handleLogoutClick}
          />
        </div>
      </div>
      {/* 알림 창 */}
      <div
        css={css`
          width: 100%;
          height: 400px;
          flex: 5 0;
          border: 1px solid #0b6ff2;
          background-color: white;
        `}
      >
        <div
          css={css`
            display: flex;
            height: 10%;
            padding: 0.5rem;
            align-items: center;
            border-bottom: 1px solid #999999;
          `}
        >
          <div
            css={css`
              display: inline-block;
              width: 10%;
              height: 100%;
              margin-right: 5%;
              font-size: 1.3rem;
              text-align: center;
            `}
          >
            🔔
          </div>
          <div
            css={css`
              display: inline-block;
              width: 60%;
              height: 100%;
              font-size: 1.3rem;
            `}
          >
            내 알림
          </div>
          <button
            onClick={() => {
              handleDeleteAll(userInfo.memberId);
            }}
            css={css`
              display: inline-block;
              width: 25%;
            `}
          >
            전체 삭제
          </button>
        </div>
        <ul
          css={css`
            height: 90%;
            overflow: hidden;
            overflow-y: scroll;
            li:last-of-type {
              border-bottom: none;
            }
          `}
        >
          {alarm.map((al, idx) => {
            return (
              <Alarm
                key={idx}
                alarm={al}
                handleDeleteAlarm={handleDeleteAlarm}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProfileModal;
