import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;

  .ranking-header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .image {
      position: relative;
      height: 80px;
    }

    .tit {
      width: 116px;
      margin: 6px 0 0 10px;

      a > h3 {
        font-weight: bold !important;
      }

      .btn {
        display: flex;
        margin-top: 8px;
        .play,
        .favourite {
          width: 22px;
          height: 22px;
        }

        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .favourite {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .ranking-list {
    padding-left: 10px;
    .list-item {
      display: flex;
      height: 32px;
      line-height: 32px;

      .number {
        width: 35px;
        text-align: center;
      }

      .song-name {
        /* width: 185px; */
        width: 96px;
        font-size: 12px;
      }

      &:hover .oper {
        display: block;
        /* width: 96px; */
      }

      .oper {
        display: flex;
        align-items: center;
        /* display: none; */
        width: 82px;
        text-indent: -9999px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favourite {
          background-position: -297px -268px;
        }
      }
    }
  }

  .ranking-footer {
    height: 33px;
  }
`
