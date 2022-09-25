<template>
  <div>
    <img src="@/assets/images/mainBanner.png" class="card-img" alt="..." />
    <div class="container mb-4">
      <div class="fs-3 mt-5 mb-3 w-75 fw-bold mx-auto" style="color: #e32066">
        #가장 많이 구매한 일정표
      </div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators w-25 mx-auto"
          style="background-color: #cccccc; border-radius: 15px"
        >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container w-75 card-group gap-1 mb-5">
              <!-- rating순으로 정렬 -> index 0~3 반복 -->
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[0].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[0].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[1].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[1].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[2].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[2].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[3].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[3].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[3].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container w-75 card-group gap-1 mb-5">
              <!-- rating순으로 정렬 -> index 4~7 반복 -->
              <!--              TODO: index 수정-->
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[0].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[0].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[1].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[1].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[2].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[2].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[3].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[3].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[3].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container w-75 card-group gap-1 mb-5">
              <!-- rating순으로 정렬 -> index 8~11 반복 -->
              <!--              TODO: index 수정-->

              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[0].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[0].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[1].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[1].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[1].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[2].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[2].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[2].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: schedules[3].scheduleId,
                  },
                }"
                class="card border rounded"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title fw-bold mb-3"
                    style="color: #333333; font-weight: bold; font-size: 15px"
                  >
                    {{ schedules[3].name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[3].hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ schedules[0].hashes[1] }}
                    </button>
                  </div>
                  <h4 class="card-text mt-2" style="color: #333333">2000P</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            style="background-color: #aaaaaa; border-radius: 100%"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            style="background-color: #aaaaaa; border-radius: 100%"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!--    SchedulePage start-->
      <div
        class="fs-3 mt-5 pt-5 mb-3 w-75 border-top fw-bold mx-auto"
        style="color: #e32066"
      >
        #현지인이 만든 일정표
      </div>
      <div class="container w-75 px-0">
        <div class="border-bottom mt-2 pb-2">
          <div class="hstack gap-3 ms-3">
            <div>지역</div>
            <div class="vr"></div>
            <div>
              <select
                class="form-select form-select-sm col"
                aria-label=".form-select-sm example"
                style="border: none"
                v-model="region"
                @change="searchSchedule"
              >
                <option value="">선택</option>
                <option value="수도권">수도권</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="제주도">제주도</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mt-3 mb-5 row">
          <div class="col-8">
            <button
              type="button"
              class="btn btn-secondary btn-sm me-2"
              style="background-color: #e32066; border: none"
              @click="openModal"
            >
              태그 추가하기 +
            </button>

            <button
              type="button"
              class="btn btn-light btn-sm me-3"
              @click="resetHashtagList"
            >
              초기화
            </button>

            <button
              v-for="(item, index) in hashtags"
              :key="index"
              type="button"
              class="btn btn-primary btn-sm ms-1"
              style="background-color: #4a80ff; border: none"
              @click="removeHashtagItem(index)"
            >
              #{{ item }} ⨉
            </button>

            <!-- 컴포넌트 MyModal -->
            <HashtagModal @close="closeModal" v-if="hashtagModal">
              <template slot="header"> 해시태그 </template>
              <!-- default 슬롯 콘텐츠 -->
              <div class="fs-5 mb-2">#이동수단</div>
              <div>
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#자동차"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('자동차')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#지하철"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('지하철')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#기차"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('기차')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#버스"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('버스')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#택시"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('택시')"
                />
              </div>
              <div class="fs-5 mt-3 mb-2">#취향</div>
              <div>
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#데이트"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('데이트')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#액티비티"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('액티비티')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#맛집"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('맛집')"
                />
                <input
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  value="#놀거리"
                  style="background-color: #4a80ff; border: none"
                  @click="addHashtag('놀거리')"
                />
              </div>
              <div class="fs-5 mt-3 mb-2">#태그 직접입력하기</div>
              <div class="mx-3">
                #<input
                  type="text"
                  class="me-1 ms-1 form-control-sm"
                  v-model="directHashtag"
                  @keyup.enter="addDirectHashtag(`${directHashtag}`)"
                />
              </div>
              <div class="fs-5 mt-3 mb-2">#선택한 태그</div>
              <div>
                <button
                  v-for="(item, index) in hashtags"
                  :key="index"
                  type="button"
                  class="btn btn-primary btn-sm me-1 ms-1"
                  style="background-color: #4a80ff; border: none"
                  @click="removeHashtagItem(index)"
                >
                  #{{ item }} X
                </button>
              </div>
              <!-- /default -->
              <!-- footer 슬롯 콘텐츠 -->
              <template slot="footer">
                <button
                  @click="doSend"
                  class="btn btn-primary btn-sm"
                  style="
                    border-color: #e32066;
                    background-color: #e32066;
                    color: #ffffff;
                    width: 100%;
                  "
                >
                  추가하기
                </button>
              </template>
              <!-- /footer -->
            </HashtagModal>
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control ms-auto"
              id="search"
              placeholder="🔍여행지를 검색해보세요."
              v-model="word"
              @keydown.enter="searchSchedule"
            />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col h-100">
            <div class="row row-cols-1 row-cols-md-4 g-1">
              <div
                v-for="(item, index) in scheduleList"
                :key="index"
                class="col"
              >
                <div class="card h-100">
                  <router-link
                    :to="{
                      name: 'ScheduleDetailPage',
                      params: {
                        id: item.scheduleId,
                      },
                    }"
                    style="text-decoration: none"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                      class="card-img-top rounded-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div
                        class="card-title"
                        style="
                          color: #333333;
                          font-size: 15px;
                          font-weight: bold;
                        "
                      >
                        {{ item.name }}
                      </div>
                      <div style="color: #e32066">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-1"
                          style="background-color: #e32066; border: none"
                        >
                          #{{ item.hashes[0] }}
                        </button>
                      </div>
                      <h4 class="card-text mt-2" style="color: black">2000P</h4>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HashtagModal from "@/components/modals/HashtagModal";
import { fetchSchedules, mostBuySchedule } from "@/api/schedules";

export default {
  name: "MainPage",
  components: { HashtagModal },
  data() {
    return {
      hashtags: [],
      region: "",
      schedules: [],
      scheduleList: [],
      word: "",
      directHashtag: "",

      hashtagModal: false,
    };
  },
  async created() {
    await this.getTopScheduleList();
    await this.getScheduleList();
  },
  methods: {
    async getTopScheduleList() {
      try {
        const { data } = await mostBuySchedule();
        this.schedules = data.data.schedules;
      } catch (e) {
        console.log(e);
      }
    },
    async getScheduleList() {
      try {
        const requestData = {
          region: this.region,
          word: this.word,
          hashes: this.hashtags,
        };
        const { data } = await fetchSchedules(requestData);
        this.scheduleList = data.data.schedules;
      } catch (e) {
        console.log(e);
      }
    },
    async searchSchedule() {
      try {
        const requestData = {
          region: this.region,
          word: this.word,
          hashes: this.hashtags,
        };
        const { data } = await fetchSchedules(requestData);
        this.scheduleList = data.data.schedules;
      } catch (e) {
        console.log(e);
      }
    },
    addHashtag(value) {
      if (this.hashtags.includes(value)) {
        return false;
      } else {
        this.hashtags.push(value);
      }
    },
    addDirectHashtag(value) {
      if (this.hashtags.includes(value)) {
        return false;
      } else {
        this.hashtags.push(value);
      }
      this.directHashtag = "";
    },
    removeHashtagItem(index) {
      this.hashtags.splice(index, 1);
      this.searchSchedule();
    },
    openModal() {
      this.hashtagModal = true;
    },
    closeModal() {
      this.hashtagModal = false;
    },
    resetHashtagList() {
      this.hashtags = [];
    },
    doSend() {
      this.closeModal();
      this.searchSchedule();
    },
  },
};
</script>

<style scoped></style>
