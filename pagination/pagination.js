import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const ComponentPagination = ({ mainData, pageNumber, setPageNumber }) => {
  const itemsPerPage = 6

  const numberOfPageNumberBtn = 5

  const totalPageCount = Math.ceil(mainData.length / itemsPerPage)

  const pageNumberCondition =
    totalPageCount - pageNumber >= numberOfPageNumberBtn

  const displayNumberGreater = pageNumberCondition
    ? pageNumber
    : totalPageCount - numberOfPageNumberBtn + 1

  const displayNumber =
    totalPageCount > numberOfPageNumberBtn ? displayNumberGreater : 1

  const totalPageToDisplayGreater = pageNumberCondition
    ? pageNumber + numberOfPageNumberBtn - 1
    : totalPageCount

  const totalPageToDisplay =
    totalPageCount > numberOfPageNumberBtn
      ? totalPageToDisplayGreater
      : totalPageCount

  let active = pageNumber

  let items = []

  for (let number = displayNumber; number < totalPageToDisplay + 1; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPageNumber(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>,
    )
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        {pageNumber !== 1 && (
          <>
            <Pagination.First onClick={() => setPageNumber(1)} />
            <Pagination.Prev
              onClick={() => {
                pageNumber > 1 && setPageNumber(prevState => prevState - 1)
              }}
            />
          </>
        )}
        {items}
        {pageNumber !== totalPageCount && (
          <>
            <Pagination.Next
              onClick={() => {
                pageNumber < totalPageCount &&
                  setPageNumber(prevState => prevState + 1)
              }}
            />
            <Pagination.Last
              onClick={() => {
                setPageNumber(totalPageCount)
              }}
            />
          </>
        )}
      </Pagination>
    </div>
  )
}

export default ComponentPagination
