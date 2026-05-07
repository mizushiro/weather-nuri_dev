export class ComparisonMap {
  constructor(opt) {
    this.id = opt.id;
    this.wrap = document.querySelector(`[data-comparison-map="${this.id}"]`);
    this.left = this.wrap.querySelector(`[data-comparison-left="${this.id}"]`);
    this.right = this.wrap.querySelector(`[data-comparison-right="${this.id}"]`);
    this.handle = this.wrap.querySelector(`[data-comparison-handle="${this.id}"]`);

    this.init();
  }

  init() {
    console.log(this.wrap)

    this.handle.addEventListener('mousedown', this.startDrag);
    window.addEventListener('mousemove', this.onDrag);
    window.addEventListener('mouseup', this.stopDrag);
  }

  startDrag = (e) => {
    e.preventDefault();
    this.isDragging = true;
    this.dragStartX = e.clientX;
    // handle의 현재 위치를 wrap 기준으로 저장
    const wrapRect = this.wrap.getBoundingClientRect();
    const handleRect = this.handle.getBoundingClientRect();
    this.startLeft = handleRect.left - wrapRect.left;
  }

  onDrag = (e) => {
    if (!this.isDragging) return;
    const wrapRect = this.wrap.getBoundingClientRect();
    const handleRect = this.handle.getBoundingClientRect();
    const maxMove = wrapRect.width - handleRect.width;
    // 드래그 시작 위치 + 마우스 이동량
    let newLeft = this.startLeft + (e.clientX - this.dragStartX);
    newLeft = Math.max(0, Math.min(newLeft, maxMove));
    const leftPercent = (newLeft / maxMove) * 100;
    this.wrap.style.gridTemplateColumns = `${leftPercent}% auto 1fr`;
    }

    stopDrag = (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      // 드래그 종료 후 추가 동작 필요시 여기에 작성
    }
}

export class TimeRangeHistory {
    
  constructor(opt) {
    this.id = opt.id;
    this.wrap = document.querySelector(`.timeRange[data-time-range="${this.id}"]`);
    this.input = this.wrap.querySelector('.timeRange-range');
    this.bar = this.wrap.querySelector('.timeRange-bar');
    this.step = opt.step || 10; // 기본 10분
    this.date = opt.date || new Date().toISOString().split('T')[0]; // 날짜 설정 (YYYY-MM-DD)

    const makeHtml = `<div class="timeRange-line">
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>00:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>01:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>02:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>03:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>04:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>05:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>06:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>07:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>08:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>09:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>10:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>11:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>12:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>13:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>14:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>15:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>16:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>17:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>18:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>19:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>20:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>21:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>22:00</b></div>
      <div class="timeRange-hour"><hr /><hr /><hr /><hr /><hr /><hr /><b>23:00</b></div>
    </div>
    <div class="timeRange-fake-input">
      <div class="timeRange-fake-handle">
        <b class="timeRange-fake-value">00:00</b>
      </div>
      <div class="timeRange-fake-track">
        <div class="timeRange-today">
          <b class="timeRange-today-text">4월 26일</b>
        </div>
      </div>
    </div>`;

    this.bar.insertAdjacentHTML('beforeend', makeHtml);
    this.fakeHandle = this.wrap.querySelector('.timeRange-fake-handle');
    this.fakeTrack = this.wrap.querySelector('.timeRange-fake-track');
    this.fakeTodayText = this.wrap.querySelector('.timeRange-today-text');
    this.fakeTodayText.textContent = `${new Date(this.date).getMonth() + 1}월 ${new Date(this.date).getDate()}일`;


    // point 처리: 숫자면 배열로 변환, 마지막 값 1380(23*60) 초과시 1380으로 보정
    let pointClass = '';
    if (typeof opt.point === 'number') {
      const interval = opt.point;
      this.points = [];
      for (let i = 0; i <= 23 * 60; i += interval) {
        this.points.push(i);
      }
      if (this.points[this.points.length - 1] < 23 * 60) {
        this.points.push(23 * 60);
      }
      if (this.points[this.points.length - 1] > 23 * 60) {
        this.points[this.points.length - 1] = 23 * 60;
      }
      pointClass = `time-${interval}`;
    } else if (Array.isArray(opt.point)) {
      this.points = opt.point.slice();
      if (this.points[this.points.length - 1] > 23 * 60) {
        this.points[this.points.length - 1] = 23 * 60;
      }
      if (opt.point.length === 1 && typeof opt.point[0] === 'number') {
        pointClass = `time-${opt.point[0]}`;
      } else {
        pointClass = '';
      }
    } else {
      this.points = [0, 180, 360, 540, 720, 900, 1080, 1260, 1380];
      pointClass = 'time-180';
    }

    // .timeRange에 time-xxx 클래스 추가 (기존 time-xxx 제거)
    if (this.wrap && pointClass) {
      this.wrap.classList.forEach(cls => {
        if (cls.startsWith('time-')) this.wrap.classList.remove(cls);
      });
      this.wrap.classList.add(pointClass);
    }
    this.onChange = opt.onChange || function(){};
    this.valueBox = this.wrap.querySelector('.timeRange-fake-value');
    this.playTime = opt.playTime || 3000; // 기본 3초
    this.playBtn = this.wrap.querySelector('.timeRange-play');
    this._playTimer = null;
    this._playClickHandler = null;
    this._inputHandler = null;

    // value가 [시, 분] 배열이면 분 단위로 변환
    if (Array.isArray(opt.value) && opt.value.length === 2) {
      this.value = opt.value[0] * 60 + opt.value[1];
    } else {
      this.value = opt.value || 0;
    }
    // upperLimit 옵션 처리 (실제 선택 제한용)
    if (opt.upperLimit) {
      if (Array.isArray(opt.upperLimit) && opt.upperLimit.length === 2) {
        this.upperLimit = opt.upperLimit[0] * 60 + opt.upperLimit[1];
      } else {
        this.upperLimit = Number(opt.upperLimit);
      }
    } else {
      this.upperLimit = 23 * 60; // 제한 없으면 23:00
    }
    this.max = 23 * 60; // 트랙은 항상 0~1380(23:00)
    // this._initRange();
    // this._updateFakeHandle();
    // this._updateValueBox();
    // upperLimit보다 value가 크면 보정
    if (this.value > this.upperLimit) {
      this.setValue(this.upperLimit);
    }
  }

  setPoint(point) {
    let pointClass = '';
    if (typeof point === 'number') {
      const interval = point;
      this.points = [];
      for (let i = 0; i <= 23 * 60; i += interval) {
        this.points.push(i);
      }
      if (this.points[this.points.length - 1] < 23 * 60) {
        this.points.push(23 * 60);
      }
      if (this.points[this.points.length - 1] > 23 * 60) {
        this.points[this.points.length - 1] = 23 * 60;
      }
      pointClass = `time-${interval}`;
    } else if (Array.isArray(point)) {
      this.points = point.slice();
      if (this.points[this.points.length - 1] > 23 * 60) {
        this.points[this.points.length - 1] = 23 * 60;
      }
      if (point.length === 1 && typeof point[0] === 'number') {
        pointClass = `time-${point[0]}`;
      } else {
        pointClass = '';
      }
    } else {
      this.points = [0, 180, 360, 540, 720, 900, 1080, 1260, 1380];
      pointClass = 'time-180';
    }
    // .timeRange에 time-xxx 클래스 추가 (기존 time-xxx 제거)
    if (this.wrap && pointClass) {
      this.wrap.classList.forEach(cls => {
        if (cls.startsWith('time-')) this.wrap.classList.remove(cls);
      });
      this.wrap.classList.add(pointClass);
    }
  }
  _startPlay() {
    if (this._playTimer) return;
    this.playBtn.setAttribute('data-toggle-state', 'selected');
    this._playTimer = setInterval(() => {
      let next = this.value + this.step;
      if (next > this.upperLimit) {
        next = this.upperLimit;
      }
      this.setValue(next);
      if (next >= this.upperLimit) {
        this._stopPlay();
      }
    }, this.playTime);
  }

  _stopPlay() {
    if (this._playTimer) {
      clearInterval(this._playTimer);
      this._playTimer = null;
    }
    this.playBtn.removeAttribute('data-toggle-state');
  }

  _initRange() {
    // 0~1380분, step 적용 (트랙은 항상 전체)
    this.input.min = 0;
    this.input.max = this.max; // 항상 전체 트랙
    this.input.step = this.step;
    this.input.value = Math.min(this.value, this.max);
    // input 이벤트 중복 방지
    if (this._inputHandler) {
      this.input.removeEventListener('input', this._inputHandler);
    }
    this._inputHandler = (e) => {
      let v = Number(e.target.value);
      // step 단위로 이동 시 upperLimit보다 적게 남아도 마지막 이동에서 upperLimit로 snap
      // (예: 900→1080, step=180, upperLimit=1000이면 900→1000으로 이동)
      if (v < this.upperLimit && v + this.step > this.upperLimit) {
        v = this.upperLimit;
      }
      if (v > this.upperLimit) v = this.upperLimit;
      this.value = v;
      this.input.value = v;
      this._updateFakeHandle();
      this._updateValueBox();
      this.onChange(this.value, this._formatTime(this.value));
    };
    this.input.addEventListener('input', this._inputHandler);

    // 마우스업 시 step 기준으로 스냅
    if (this._mouseupHandler) {
      this.input.removeEventListener('mouseup', this._mouseupHandler);
    }
    this._mouseupHandler = (e) => {
      let v = Number(this.input.value);
      // point 배열에서 가장 가까운 값으로 스냅
      let closest = this.points.reduce((prev, curr) =>
        Math.abs(curr - v) < Math.abs(prev - v) ? curr : prev
      );
      this.setValue(closest);
    };
    this.input.addEventListener('mouseup', this._mouseupHandler);
  }
  _updateValueBox() {
    if (!this.valueBox) return;
    this.valueBox.textContent = this._formatTime(this.value);
  }
  _updateFakeHandle() {
    if (!this.fakeHandle) return;
    // 백분율 위치 계산
    const percent = (this.value - this.input.min) / (this.input.max - this.input.min) * 100;
    this.fakeHandle.style.left = `calc(${percent}% )`;
    this.fakeTrack.style.width = `${percent}%`;
  }

  _formatTime(val) {
    // 분 단위를 시:분 문자열로 변환
    const hour = Math.floor(val / 60);
    const min = val % 60;
    return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
  }

  setStep(step) {
    this.step = step;
    this.input.step = step;
    // step 변경 시 현재 값도 step에 맞게 보정
    this.input.value = Math.round(this.value / step) * step;
    this.value = Number(this.input.value);
    this._updateFakeHandle();
    this._updateValueBox();
    this.onChange(this.value, this._formatTime(this.value));
  }

  setValue(val) {
    let v = val;
    if (v > this.upperLimit) v = this.upperLimit;
    this.value = v;
    this.input.value = v;
    this._updateFakeHandle();
    this._updateValueBox();
    this.onChange(this.value, this._formatTime(this.value));
  }

  init() {
    // 외부에서 호출 시에도 값/step 반영
    this._initRange();
    this._updateFakeHandle();
    this._updateValueBox();
    // playBtn 이벤트 중복 방지
    if (this.playBtn) {
      if (this._playClickHandler) {
        this.playBtn.removeEventListener('click', this._playClickHandler);
      }
      this._playClickHandler = () => {
        console.log('playBtn clicked',this.playBtn.getAttribute('data-toggle-state'));
        if (this.playBtn.getAttribute('data-toggle-state') !== 'selected') {
          this._stopPlay();
        } else {
          this._startPlay();
        }
      };
      this.playBtn.addEventListener('click', this._playClickHandler);
    }
  }

  setUpperLimit(upperLimit) {
    if (Array.isArray(upperLimit) && upperLimit.length === 2) {
      this.upperLimit = upperLimit[0] * 60 + upperLimit[1];
    } else {
      this.upperLimit = Number(upperLimit);
    }
    if (this.value > this.upperLimit) {
      this.setValue(this.upperLimit);
    }
    this._initRange();
    this._updateFakeHandle();
    this._updateValueBox();
  }

  setPlayTime(playTime) {
    this.playTime = playTime;
    // 재생 중이면 즉시 반영
    if (this._playTimer) {
      this._stopPlay();
      this._startPlay();
    }
  }

  setStep(step) {
    this.step = step;
    this.input.step = step;
    // step 변경 시 현재 값도 step에 맞게 보정
    this.input.value = Math.round(this.value / step) * step;
    this.value = Number(this.input.value);
    this._initRange();
    this._updateFakeHandle();
    this._updateValueBox();
    this.onChange(this.value, this._formatTime(this.value));
  }

  setValue(val) {
    let v = val;
    if (Array.isArray(v) && v.length === 2) {
      v = v[0] * 60 + v[1];
    }
    if (v > this.upperLimit) v = this.upperLimit;
    this.value = v;
    this.input.value = v;
    this._updateFakeHandle();
    this._updateValueBox();
    this.onChange(this.value, this._formatTime(this.value));
  }
}